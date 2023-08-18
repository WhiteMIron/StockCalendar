import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import { MySeries } from '@typings/treeMap';
import TreeMap from '@components/TreeMap/TreeMap';
import StocksList from '@components/StockList/StockList';
import { Istock } from '@typings/stock';
import axios from 'axios';
import { isEmpty } from '@utils/common';
import NoData from '@components/NoData';
import StocksDetail from '@components/StocksMemo/StocksDetail';
import { defines } from '@constants/index';
import { IResponseCategory } from '@typings/category';
import Loading from '@components/Loading/Loading';
const Interest = () => {
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>(`/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const navigate = useNavigate();
  const [stocks, setStocks] = useState<Istock[]>([]);
  const [selectedStockCode, setSelectedStockCode] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [series, setSeries] = useState<MySeries[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const fetchApiName = 'specific-interest-stock-all';
  const [isDataLoading, setDataLoading] = useState(false);
  if (!userData) {
    navigate('/login');
  }

  useEffect(() => {
    axios
      .get(`/api/interest-category`)
      .then((response) => {
        setSeries(transformedSeries(response.data));

        setTimeout(() => {
          setLoading(true);
          setDataLoading(true);
        }, 200);
      })
      .catch((error) => {})
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

  const onTreeMapClick = (event: any, chartContext: any, config: any) => {
    if (config.dataPointIndex !== undefined) {
      const value = config.w.config.series[config.seriesIndex].data[config.dataPointIndex].x;
      setDataLoading(false);
      axios
        .get(`/api/interest-stock-in-category`, {
          params: {
            categoryName: value,
          },
        })
        .then((response) => {
          setStocks(response.data);
          setSelectedCategoryName(value);
          setIsSelected(false);
          setTimeout(() => {
            setDataLoading(true);
          }, 100);
        })
        .catch((error) => {})
        .finally(() => {});
    }
  };

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
                <TreeMap treeMapTitle={defines.treeMapTitle.interest} onTreeMapClick={onTreeMapClick} series={series} />
                <StocksList stocks={stocks} onStock={onStock} isDataLoading={isDataLoading}>
                  <DateInfoGroup>
                    <DateInfo>관심 종목 리스트</DateInfo>
                  </DateInfoGroup>
                </StocksList>

                {isSelected && !isEmpty(stocks) ? (
                  <>
                    <StocksDetail
                      fetchApiName={fetchApiName}
                      selectedStockCode={selectedStockCode}
                      selectedCategoryName={selectedCategoryName}
                    ></StocksDetail>
                  </>
                ) : null}
              </>
            ) : (
              <NoData text={defines.Nodata.interestStockText}></NoData>
            )
          ) : (
            <Loading />
          )}
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

export default Interest;
