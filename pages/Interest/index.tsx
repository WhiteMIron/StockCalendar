import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import { MySeries } from '@typings/treeMap';
import TreeMap from '@components/TreeMap/TreeMap';
import StocksList from '@components/StockList/StockList';
import { Istock } from '@typings/stock';
import axios from 'axios';
import { isEmpty } from '@utils/common';
import NoData from '@components/NoData';
import StocksReadMemo from '@components/StocksMemo/StocksReadMemo';
import StocksDetail from '@components/StocksMemo/StocksDetail';
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
  const [stocks, setStocks] = useState<Istock[]>([]);
  const [selectedStockCode, setSelectedStockCode] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [series, setSeries] = useState<MySeries[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    axios
      .get('/api/interest-category')
      .then((response) => {
        setSeries(transformedSeries(response.data));
        setLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  }, []);

  const transformedSeries = (categoryInfo: IResponseCategory[]) => {
    return categoryInfo?.map((info) => ({
      name: info.name,
      data: [
        {
          x: info.name,
          y: info.stockCount,
        },
      ],
    }));
  };

  const onStock = async (stock: Istock) => {
    setSelectedStockCode(stock.stock_code);
    setIsSelected(true);
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
          {loading ? (
            !isEmpty(series) ? (
              <>
                <TreeMap
                  series={series}
                  stocks={stocks}
                  setStocks={setStocks}
                  setIsSelected={setIsSelected}
                  setSelectedCategoryName={setSelectedCategoryName}
                />
                <StocksList stocks={stocks} onStock={onStock}>
                  <DateInfoGroup>
                    <DateInfo>종목 리스트</DateInfo>
                  </DateInfoGroup>
                </StocksList>

                {isSelected && !isEmpty(stocks) ? (
                  <>
                    <StocksDetail
                      selectedStockCode={selectedStockCode}
                      selectedCategoryName={selectedCategoryName}
                    ></StocksDetail>
                  </>
                ) : null}
              </>
            ) : (
              <NoData text={'관심 종목에 등록된 데이터가 없습니다.'}></NoData>
            )
          ) : null}
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
