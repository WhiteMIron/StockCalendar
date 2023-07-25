import React, { MouseEventHandler, ReactNode, SetStateAction, useEffect } from 'react';
import StockItem from './StockItem';
import { StockListContainer } from './styles';
import { Istock } from '@typings/stock';

interface StocksListProps {
  stocks: Istock[];
  onStock: (stock: Istock) => void;

  children: ReactNode;
}

const StockList = ({ children, stocks, onStock }: StocksListProps) => {
  return (
    <StockListContainer>
      {children}
      <ul>
        {stocks.map((stock: Istock) => (
          <StockItem
            stock={stock}
            key={stock.id}
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
