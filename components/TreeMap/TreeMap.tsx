import styled from '@emotion/styled';
import { Istock } from '@typings/stock';
import { MySeries } from '@typings/treeMap';
import { isEmpty } from '@utils/common';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import React, { MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ItreeMapProps {
  stocks: Istock[] | [];
  series: MySeries[] | [];
  setStocks: React.Dispatch<SetStateAction<Istock[] | []>>;
}

const TreeMap = ({ stocks, setStocks, series }: ItreeMapProps) => {
  useEffect(() => {}, []);

  const treeMapClick = (event: any, chartContext: any, config: any) => {
    if (config.dataPointIndex !== undefined) {
      const CategoryName = config.w.config.series[config.seriesIndex].data[config.dataPointIndex].x;
      axios
        .get('/api/interest-by-category', {
          params: {
            categoryName: CategoryName,
          },
        })
        .then((response) => {
          setStocks(response.data);
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
  width: 30%;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export default TreeMap;
