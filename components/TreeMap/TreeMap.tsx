import styled from '@emotion/styled';
import { MySeries } from '@typings/treeMap';
import { isEmpty } from '@utils/common';
import { ApexOptions } from 'apexcharts';
import React, { SetStateAction, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ItreeMapProps {
  series: MySeries[] | [];
  setSelectedSeriesValue: React.Dispatch<SetStateAction<string | null>>;
}

const TreeMap = ({ series, setSelectedSeriesValue }: ItreeMapProps) => {
  const treemapClick = (event: any, chartContext: any, config: any) => {
    if (config.dataPointIndex !== undefined) {
      const seriesValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex].x;
      setSelectedSeriesValue(seriesValue);
    }
  };
  const treemapOptions: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },

      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: treemapClick,
      },
    },
    title: {
      text: '관심종목 분류',
      align: 'center',
      margin: 0,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <>
      {!isEmpty(series) ? (
        <Container>
          <ReactApexChart type="treemap" height="100%" options={treemapOptions} series={series}></ReactApexChart>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 30%;
`;

export default TreeMap;
