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
import { isEmpty } from '@utils/common';
import NoData from '@components/NoData';
import StocksDetail from '@components/StocksMemo/StocksDetail';
import { defines } from '@constants/index';
const Category = () => {
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
  const fetchApiName = 'specific-stock-all';
  useEffect(() => {
    axios
      .get('/api/category')
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

  const onTreeMapClick = (event: any, chartContext: any, config: any) => {
    if (config.dataPointIndex !== undefined) {
      const value = config.w.config.series[config.seriesIndex].data[config.dataPointIndex].x;

      axios
        .get('/api/stock-in-category', {
          params: {
            categoryName: value,
          },
        })
        .then((response) => {
          setStocks(response.data);
          setSelectedCategoryName(value);
          setIsSelected(false);
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    }
  };

  if (!userData) {
    navigate('/login');
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
          {loading ? (
            !isEmpty(series) ? (
              <>
                <TreeMap treeMapTitle={defines.treeMapTitle.category} onTreeMapClick={onTreeMapClick} series={series} />
                <StocksList stocks={stocks} onStock={onStock}>
                  <DateInfoGroup>
                    <DateInfo>{defines.Text.stockListTitle}</DateInfo>
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

export default Category;
