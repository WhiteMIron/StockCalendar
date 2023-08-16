import styled from '@emotion/styled';
import newStockAlert from '@images/new.png';
import { css } from '@emotion/react';

export const CategoryListContainer = styled.div`
  flex: 1 25%;
  flex-shrink: 0;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2); */
  min-width: 200px;
  text-align: center;
  background: white;
  padding: 10px 10px;
  border: 1px rgba(0, 0, 0, 0.2) solid;

  + div {
    margin-left: 15px;
  }
`;

export const CategoryItemContainer = styled.li`
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const CategoryTitle = styled.span``;
