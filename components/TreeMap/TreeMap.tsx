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
      text: '관심종목 분류', // 트리맵 차트의 제목
      align: 'center', // 제목의 정렬 위치 ("left", "center", "right" 중 선택)
      margin: 0, // 제목의 여백 설정
      style: {
        fontSize: '28px', // 제목의 폰트 크기
        fontWeight: 'bold', // 제목의 글꼴 굵기
        fontFamily: 'Arial, sans-serif', // 제목의 글꼴
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
  margin-right: 20px;
`;

export default TreeMap;
