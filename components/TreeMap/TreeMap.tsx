import styled from '@emotion/styled';
import { Istock } from '@typings/stock';
import { MySeries } from '@typings/treeMap';
import { isEmpty } from '@utils/common';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import React, { SetStateAction, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ItreeMapProps {
  stocks: Istock[] | [];
  series: MySeries[] | [];
  setStocks: React.Dispatch<SetStateAction<Istock[] | []>>;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setSelectedCategoryName: React.Dispatch<SetStateAction<string>>;
}

const TreeMap = ({ stocks, setStocks, series, setIsSelected, setSelectedCategoryName }: ItreeMapProps) => {
  useEffect(() => {}, []);

  const treeMapClick = (event: any, chartContext: any, config: any) => {
    if (config.dataPointIndex !== undefined) {
      const categoryName = config.w.config.series[config.seriesIndex].data[config.dataPointIndex].x;
      axios
        .get('/api/interest-by-category', {
          params: {
            categoryName: categoryName,
          },
        })
        .then((response) => {
          setStocks(response.data);
          setSelectedCategoryName(categoryName);
          setIsSelected(false);
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    }
  };

  const treeMapOptions: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },

      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: treeMapClick,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF'],
      },
    },
    title: {
      text: '관심종목 분류',
      align: 'center',
      offsetX: -15,
      offsetY: 10,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <>
      <Container>
        <ReactApexChart type="treemap" height="100%" options={treeMapOptions} series={series} />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  /* width: 50%; */
  width: 20%;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export default TreeMap;
