import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StockListContainer = styled.div`
  flex: 1 25%;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
  margin-right: 15px;
  min-width: 200px;
  text-align: center;
  background: white;
  padding: 10px 10px;
`;

export const StockItemContainer = styled.li`
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
