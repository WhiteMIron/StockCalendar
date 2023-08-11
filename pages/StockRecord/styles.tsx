import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import newStockAlert from '@images/new.png';
const breakpoints = [576, 768, 992, 1200];
// const breakpoints = [576, 700, 800, 1200];
const heightBreakPoints = [400, 600, 700, 800, 900];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
const hq = heightBreakPoints.map((bp) => `@media (min-height: ${bp}px)`);

const variant = {
  guide_4: 'a',
};
type ButtonProps = {
  color?: 'red' | 'dodgerblue' | '#00BB9D' | '#8e8e8e' | '#60d6bf' | '#fff';
  marginRight?: string;
  opacity?: string;
  width?: string;
};
type inputProps = {
  minWidth?: string;
  marginBottom?: string;
};

type StockTitleProps = {
  new?: boolean;
};

type SearchItemProps = {
  isFocus: boolean;
  isMovingKey: boolean;
};

export const CalendarContainer = styled.div`
  max-width: 350px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const CalendarBox = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  .react-calendar {
    padding: 0 10px;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px rgba(0, 0, 0, 0.2) solid;
    /* box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2); */
  }
  .react-calendar__navigation__label > span {
    color: #f87171;
    font-weight: bold;
  }
  .react-calendar__viewContainer {
  }
  .react-calendar__tile {
    /* height: 60px; */

    height: 55px;
  }
  .react-calendar__month-view__weekdays {
    font-size: 14px;
  }
  .react-calendar__tile.react-calendar__tile--now.react-calendar__tile--hasActive.react-calendar__year-view__months__month.react-calendar__month-view__weekdays__weekday {
    /* font-size: 16px; */
    /* color: rgb(15, 70, 15); */
    /* color: pink; */
  }
  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day {
    font-size: 16px;
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
      padding: 10px;
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
      padding: 10px;
    }
  }

  .react-calendar__tile--now.react-calendar__tile--active {
    background: none;
    & abbr {
      background-color: #4e8dd4;
      color: white;
      border-radius: 50%;
      padding: 10px;
    }
  }

  //날짜 선택했을 때 day 타일 커스텀하기

  .react-calendar__tile {
    background: none;
    color: black;
    & abbr {
      border-radius: 50%;
      padding: 10px;
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
      padding: 10px;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  .react-calendar__tile.react-calendar__tile--active.react-calendar__tile--range.react-calendar__tile--rangeStart.react-calendar__tile--rangeEnd.react-calendar__tile--rangeBothEnds.react-calendar__month-view__days__day {
    position: relative;
  }
  .react-calendar__tile.react-calendar__month-view__days__day {
    position: relative;
  }
`;

export const recordContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px;
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
export const SearchDot = styled.div`
  height: 6px;
  width: 6px;
  background-color: #ffff76;
  border-radius: 50%;
  display: inline;
  position: absolute;
  left: 27;
`;

export const DataDot = styled.div`
  height: 6px;
  width: 6px;
  background-color: #71f8ae;
  border-radius: 50%;
  position: absolute;
  left: 18;
`;

export const Input = styled.input<inputProps>`
  width: 100%;
  font: inherit;
  margin-bottom: ${(props) => props.marginBottom};
  border: none;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 5px;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  &:focus {
    /* --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px #67dbad;
   */
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border: 1px solid #60d6bf;
  &.searched {
    border: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const SearchForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  position: relative;
  padding: 8px 15px;
  background: #fff;
  width: 100%;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 24px;

  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const SearchImg = styled.img`
  position: absolute;
  height: 20px;
  width: auto;
  top: 13px;
  right: 14px;
  &:hover {
    cursor: pointer;
  }
  z-index: 999;
`;

export const SearchInput = styled.input`
  place-content: '종목명';
  border: none;
  padding: 5px;
  width: 95%;
`;

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  flex-shrink: 1;
  opacity: ${(props) => props.opacity};
  color: white;
  border-radius: 8px;
  font-size: 15px;
  height: 35px;
  border: none;
  background: ${(props) => props.color};
  margin-right: ${(props) => props.marginRight};

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    outline-style: solid;
    outline-color: #67dbad;
    outline-width: 1px;
  }
`;

export const AddButton = styled(Button)`
  background: #60d6bf;
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
`;

export const DownButton = styled(Button)`
  width: 100px;
  background: dodgerblue;
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
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const NewsGroup = styled.div`
  /* margin-bottom: 20px; */
`;

export const ChangeInfoGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;
export const Content = styled.div`
  display: flex;

  > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    line-height: 1.46666667;
  }
`;
export const StockNameGroup = styled.div``;

export const StockInfoGroup = styled.div`
  margin-bottom: 8px;
`;

export const StockPriceGroup = styled.div``;

export const NewStockAlert = styled.img`
  content: url(${newStockAlert});
  margin-left: 5px;
  width: 22px;
  height: auto;
`;

export const StockTitle = styled.span<StockTitleProps>`
  ${(props) =>
    props.new === true &&
    css`
      &::after {
        content: '';
        display: inline-block;
        background-image: url(${newStockAlert});
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: right;
        margin-left: 0.5em;
        width: 20px;
        height: 20px;
        vertical-align: sub;
      }
    `}
`;

export const DateInfo = styled.div`
  border-bottom: 2px solid #76baff;
  padding: 8px;
`;

export const DateInfoGroup = styled.div`
  padding: 0 25%;
`;

export const SearchItem = styled.li<SearchItemProps>`
  background-color: ${(props) => props.isFocus && '#76baff'};
  padding: 5px 0 5px 25px;
  position: relative;
  ${(props) =>
    props.isMovingKey === false &&
    css`
      &:hover {
        cursor: pointer;
        background: #76baff;
      }
    `}
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-image: url('https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png');
    top: 8px;
    left: 6px;
    width: 20px;
    height: 20px;
    -webkit-background-size: 13px 13px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
`;
