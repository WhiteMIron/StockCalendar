import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavContainer = styled.div`
  min-width: 200px;
  min-height: 900px;
  width: 13%;
  padding: 0 10px;
  background: #222;
`;

export const NavTitle = styled.li`
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #189cda;
    color: white;
  }
`;

export const NavContents = styled.ul`
  font-size: 17px;
`;

export const Icon = styled.div`
  display: flex;
  > img {
    margin-right: 10px;
  }
`;
