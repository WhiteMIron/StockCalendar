import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonProps = {
  color?: 'red' | 'dodgerblue' | '#00BB9D' | '#8e8e8e' | '#60d6bf' | '#fff';
  marginRight?: string;
  marginBottom?: string;
  opacity?: string;
  width?: string;
};

type ButtonGroupProps = {
  justifyContent?: string;
};

export const BtnGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  width: 100%;
`;

BtnGroup.defaultProps = {
  justifyContent: 'center',
};

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  flex-shrink: 1;
  opacity: ${(props) => props.opacity};
  color: black;
  border-radius: 8px;
  font-size: 15px;
  height: 35px;
  border: none;
  background: ${(props) => props.color};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: 20px;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    outline-style: solid;
    outline-color: #67dbad;
    outline-width: 1px;
  }
`;

Button.defaultProps = {
  marginBottom: '20px',
};
