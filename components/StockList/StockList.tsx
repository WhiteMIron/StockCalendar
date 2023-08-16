import React, { MouseEventHandler, ReactNode, SetStateAction, useEffect } from 'react';
import StockItem from './StockItem';
import { StockListContainer } from './styles';
import { Istock } from '@typings/stock';
import uuid from 'react-uuid';
import Loading from '@components/Loading/Loading';

interface StocksListProps {
  stocks: Istock[];
  onStock: (stock: Istock) => void;

  children: ReactNode;
  isDataLoading: boolean;
}

const StockList = ({ children, stocks, onStock, isDataLoading }: StocksListProps) => {
  return (
    <StockListContainer>
      {children}
      {isDataLoading ? (
        <>
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
        </>
      ) : (
        <Loading />
      )}
    </StockListContainer>
  );
};

export default StockList;
