import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import { MySeries } from '@typings/treeMap';
import TreeMap from '@components/TreeMap/TreeMap';

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

  const series: MySeries[] | [] = [
    {
      name: 'Desktops',
      data: [
        {
          x: 'ABC',
          y: 10,
        },
        {
          x: 'DEF',
          y: 60,
        },
        {
          x: 'XYZ',
          y: 41,
        },
      ],
    },
    {
      name: 'dd',
      data: [
        {
          x: 'ABC',
          y: 10,
        },
        {
          x: 'DEF',
          y: 60,
        },
        {
          x: 'XYZ',
          y: 41,
        },
      ],
    },
    {
      name: 'Mobile',
      data: [
        {
          x: 'ABCD',
          y: 10,
        },
        {
          x: 'DEFG',
          y: 20,
        },
        {
          x: 'WXYZ',
          y: 51,
        },
        {
          x: 'PQR',
          y: 30,
        },
        {
          x: 'MNO',
          y: 20,
        },
        {
          x: 'CDE',
          y: 30,
        },
      ],
    },
  ];

  if (!userData) {
    navigate('/login');
    // return <Navigate to="/login"></Navigate>;
  }

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
          <TreeMap series={series} setSelectedSeriesValue={setSelectedSeriesValue} />
          <StockListContainer>
            {selectedSeriesValue && <p>Selected Series Value: {selectedSeriesValue}</p>}
          </StockListContainer>
        </div>
      </div>
    </Layout>
  );
};

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
