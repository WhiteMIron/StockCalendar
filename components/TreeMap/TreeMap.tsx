import styled from '@emotion/styled';
import { MySeries } from '@typings/treeMap';
import { ApexOptions } from 'apexcharts';
import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ItreeMapProps {
  treeMapTitle: string;
  series: MySeries[] | [];
  onTreeMapClick: (e: any, chart?: any, options?: any) => void;
}

const TreeMap = ({ onTreeMapClick, series, treeMapTitle }: ItreeMapProps) => {
  useEffect(() => {}, []);

  const treeMapOptions: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },

      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: onTreeMapClick,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF'],
      },
    },
    title: {
      text: treeMapTitle,
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
  width: 20%;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export default TreeMap;
