import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';

import arrow from '@images/sp_ico5.png';
const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

type ButtonProps = {
  color?: '#fff' | 'red' | 'dodgerblue' | '#00BB9D' | '#8e8e8e' | '#60d6bf';
  bgColor?: '#fff' | 'red' | 'dodgerblue' | '#00BB9D' | '#8e8e8e' | '#60d6bf';
  marginRight?: string;
  marginBottom?: string;
  opacity?: string;
  width?: string;
  isBorder?: boolean;
};
type inputProps = {
  minWidth?: string;
  marginBottom?: string;
};

type MemoContainerProps = {
  active?: boolean;
};

type ButtonGroupProps = {
  justifyContent?: string;
};

export const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    border: none;
    box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    /* margin-right: 10px; */
  }
  .react-calendar__navigation__label > span {
    color: #f87171;
    font-weight: bold;
  }
  .react-calendar__viewContainer {
    min-height: 550px;
  }
  .react-calendar__tile {
    min-width: 80px;
    height: 100px;
    /* height: 200px; */
  }

  .react-calendar__tile.react-calendar__tile--now.react-calendar__tile--hasActive.react-calendar__year-view__months__month.react-calendar__month-view__weekdays__weekday {
    font-size: 16px;
    /* color: rgb(15, 70, 15); */
    color: pink;
  }
  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day {
    font-size: 15px;
    & abbr {
      text-decoration: none;
      border-radius: 50%;
    }
  }

  .react-calendar__tile--now {
    background: none;
    font-weight: bold;
    & abbr {
      color: white;
      background-color: #f87171;
      text-decoration: none;
      border-radius: 50%;
      padding: 5px;
    }
  }

  .react-calendar__tile--now:hover {
    background: none;
  }

  .react-calendar__tile--active:not(.react-calendar__tile--now) {
    background: none;
    & abbr {
      background-color: #4e8dd4;
      color: white;
      border-radius: 50%;
      padding: 5px;
    }
  }

  .react-calendar__tile--now.react-calendar__tile--active {
    background: none;
    & abbr {
      background-color: #4e8dd4;
      color: white;
      border-radius: 50%;
      padding: 5px;
    }
  }

  //날짜 선택했을 때 day 타일 커스텀하기

  .react-calendar__tile {
    background: none;
    color: black;
    & abbr {
      border-radius: 50%;
      padding: 5px;
    }
  }
  .react-calendar__tile--active {
  }
  .react-calendar__tile--active:hover {
    /* background: none; */
  }
  .react-calendar__tile:enabled:focus {
    background: none;
    & abbr {
      background-color: #4e8dd4;
      color: white;
      border-radius: 50%;
      padding: 5px;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    /* font-weight: 700; */
  }
`;
export const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

export const Input = styled.input<inputProps>`
  width: 100%;
  font: inherit;
  margin-bottom: ${(props) => props.marginBottom};
  border: 1px solid #dadada;
  border-radius: 4px;
  /* border: none; */
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1); */
  padding: 5px;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  &:focus {
    /* --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px #67dbad; */
    border: 1px solid #25d790;
  }
`;

export const fillButton = styled.button<ButtonProps>``;

export const Button = styled.button<ButtonProps>`
  /* border: none; */
  ${(props) =>
    props.isBorder === true
      ? css`
          border: 1px solid ${props.color};
        `
      : css`
          border: none;
        `}
  width: ${(props) => props.width};
  flex-shrink: 1;
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.color};

  border-radius: 8px;
  font-size: 15px;
  height: 35px;

  background: ${(props) => props.bgColor};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    ${(props) =>
      props.isBorder === true
        ? css`
            /* background: ${props.color};
            color: ${props.bgColor};
            transition: background-color color 300ms ease-in-out; */
            /* transition: box-shadow 150ms ease-in-out; */
            box-shadow: 0 0 0 1px ${props.color} inset;
            transition: all 0.5s ease-in-out;
          `
        : css`
            /* transition: opacity 300ms ease-in-out; */
            filter: brightness(110%);
            transition: all 0.5s ease-in-out;
          `}
  }
  &:active {
    outline-style: solid;
    outline-color: #67dbad;
    outline-width: 1px;
  }
`;

Button.defaultProps = {
  color: '#fff',
  isBorder: false,
};

export const AddButton = styled(Button)`
  background: #60d6bf; /* fallback for old browsers */
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    outline-style: solid;
    outline-color: #67dbad;
    outline-width: 1px;
  }
`;

export const UpButton = styled(Button)`
  width: 100px;
  background: red;
  transition: all 0.3s ease-in-out;
`;

export const DownButton = styled(Button)`
  width: 100px;
  background: dodgerblue;
  transition: all 0.3s ease-in-out;
`;

export const SearchForm = styled.div``;

export const SearchImg = styled.img`
  position: absolute;
  height: 22px;
  width: auto;
  top: 15px;
  right: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.ul`
  text-align: center;
  font-size: 18px;
`;
export const NavTitle = styled.li`
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StockItem = styled.li`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const MemoContainer = styled.div<MemoContainerProps>`
  /* padding: 10px 0; */
  width: 60%;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
  ${(props) =>
    props.active === true &&
    css`
      background: pink;
    `}
  background: white;
`;

export const Table = styled.table`
  /* background: white; */
  width: 100%;
  height: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  font-size: 15px;
  word-break: break-all;
  /* border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2); */
`;
export const Td = styled.td`
  padding: 10px;
  border: 1px solid #dadada;
  > span {
    color: dodgerblue;
  }
  > p {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export const Tr = styled.tr`
  height: 50px;
`;

export const Th = styled.th`
  border: 1px solid #dadada;
  > span {
    color: dodgerblue;
  }
  > p {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export const Tbody = styled.tbody``;

export const TableBox = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
`;

export const DownPrice = styled.span`
  position: relative;
  margin-right: 22px;
  font-size: 16px;
  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 10;
    right: -22;
    background-image: url(${arrow});
    width: 22px;
    height: 19px;
    background-position: -11px 0;
  }
`;

export const DownAmount = styled.span`
  font-size: 15px;
`;

export const BtnGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  width: 100%;
`;

BtnGroup.defaultProps = {
  justifyContent: 'center',
};
