import React, { MouseEventHandler, ReactNode, SetStateAction, useEffect } from 'react';
import StockItem from './StockItem';
import { StockListContainer } from './styles';
import { Istock } from '@typings/stock';
import uuid from 'react-uuid';

interface StocksListProps {
  stocks: Istock[];
  onStock: (stock: Istock) => void;

  children: ReactNode;
}

const StockList = ({ children, stocks, onStock }: StocksListProps) => {
  return (
    <StockListContainer>
      {children}
      <ul style={{ marginTop: '5px' }}>
        {stocks.map((stock: Istock) => (
          <StockItem
            stock={stock}
            key={uuid()}
            onStock={() => {
              onStock(stock);
            }}
          ></StockItem>
        ))}
      </ul>
    </StockListContainer>
  );
};

export default StockList;
