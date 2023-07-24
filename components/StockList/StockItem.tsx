import { StockTitle } from '@pages/StockRecord/styles';
import moment from 'moment';
import React, { useEffect } from 'react';
import { StockItemContainer } from './styles';
interface Istock {
  id: number;
  name: string;
  current_price: string;
  previous_close: string;
  days_range: string;
  title: string;
  desc: string;
  reason: string;
  createdAt: Date;
  stockCode: string;
}

interface StocksItemProps {
  stock: Istock;
  onStock: (stock: Istock) => void;
}

const StockItem = ({ stock, onStock }: StocksItemProps) => {
  return (
    <StockItemContainer
      key={stock.id}
      onClick={() => {
        onStock(stock);
      }}
    >
      <StockTitle new={moment(stock.createdAt).format('YYYY/MM/DD') === moment().format('YYYY/MM/DD') ? true : false}>
        {stock.name}
      </StockTitle>
    </StockItemContainer>
  );
};

export default StockItem;
