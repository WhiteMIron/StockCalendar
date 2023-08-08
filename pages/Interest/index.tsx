import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import { MySeries } from '@typings/treeMap';
import TreeMap from '@components/TreeMap/TreeMap';
import StocksList from '@components/StockList/StockList';
import { Istock } from '@typings/stock';
import axios from 'axios';
const Interest = () => {
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const navigate = useNavigate();
  const [selectedSeriesValue, setSelectedSeriesValue] = useState<string | null>(null);
  const [category, setCategory] = useState();

  // const series: MySeries[] | [] = [
  //   {
  //     name: 'Desktops',
  //     data: [
  //       {
  //         x: 'ABC',
  //         y: 10,
  //       },
  //       {
  //         x: 'DEF',
  //         y: 60,
  //       },
  //       {
  //         x: 'XYZ',
  //         y: 41,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'dd',
  //     data: [
  //       {
  //         x: 'ABC',
  //         y: 10,
  //       },
  //       {
  //         x: 'DEF',
  //         y: 60,
  //       },
  //       {
  //         x: 'XYZ',
  //         y: 41,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Mobile',
  //     data: [
  //       {
  //         x: 'ABCD',
  //         y: 10,
  //       },
  //       {
  //         x: 'DEFG',
  //         y: 20,
  //       },
  //       {
  //         x: 'WXYZ',
  //         y: 51,
  //       },
  //       {
  //         x: 'PQR',
  //         y: 30,
  //       },
  //       {
  //         x: 'MNO',
  //         y: 20,
  //       },
  //       {
  //         x: 'CDE',
  //         y: 30,
  //       },
  //     ],
  //   },
  // ];

  const tmp = [
    {
      id: 1,
      name: '바이오1',
      count: 5,
    },
    {
      id: 2,
      name: '바이오2',
      count: 10,
    },
    {
      id: 3,
      name: '바이오3',
      count: 15,
    },
  ];

  const transformedSeries = tmp.map((series) => ({
    name: series.name,
    data: [
      {
        x: series.name,
        y: series.count,
      },
    ],
  }));
  const testSeries: MySeries[] | [] = transformedSeries;

  console.log(testSeries);
  const [stocks, setStocks] = useState<Istock[]>([]);

  const onStock = (stock: Istock) => {
    let stockTmp = stock;

    if (!Array.isArray(stockTmp.news)) {
      stockTmp.news = JSON.parse(stockTmp.news);
    }
  };

  if (!userData) {
    navigate('/login');
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/api/record-all-search', { params: { category: '' } })
        .then((response) => {})
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <Layout user={userData}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            width: '100%',
            padding: '20px',
            borderBottomRightRadius: '8px',
          }}
        >
          <TreeMap series={testSeries} setSelectedSeriesValue={setSelectedSeriesValue} />
          <StocksList stocks={stocks} onStock={onStock}>
            <DateInfoGroup>
              <DateInfo>종목 리스트</DateInfo>{' '}
              {selectedSeriesValue && <p>Selected Series Value: {selectedSeriesValue}</p>}
            </DateInfoGroup>
          </StocksList>
        </div>
      </div>
    </Layout>
  );
};

export const DateInfoGroup = styled.div`
  padding: 0 25%;
`;
const DateInfo = styled.div`
  border-bottom: 2px solid #76baff;
  padding: 8px;
`;

const Container = styled.div`
  max-width: 350px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;
const StockListContainer = styled.div`
  flex: 1 25%;
  width: 100%;
  flex-shrink: 0;
  border-radius: 8px;
  min-width: 200px;
  text-align: center;
  background: white;
  padding: 10px 10px;
  border: 1px rgba(0, 0, 0, 0.2) solid;

  /* + div {
    margin-left: 15px;
  } */
`;
export default Interest;
