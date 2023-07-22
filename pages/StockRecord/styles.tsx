import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';

const breakpoints = [576, 768, 992, 1200];
// const breakpoints = [576, 700, 800, 1200];
const heightBreakPoints = [400, 600, 700, 800, 900];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
const hq = heightBreakPoints.map((bp) => `@media (min-height: ${bp}px)`);

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

type MemoContainerProps = {
  active?: boolean;
};

export const CalendarContainer = styled.div`
  margin-right: 20px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

export const CalendarBox = styled.div`
  height: 100%;
  .react-calendar {
    padding: 10px;
    /* height: 100%; */
    /* width: 100%; */
    /* max-width: 100%; */
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    border: none;
    box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation__label > span {
    color: #f87171;
    font-weight: bold;
  }
  .react-calendar__viewContainer {
    /* min-height: 550px; */
    /* height: 100%; */
  }
  .react-calendar__tile {
    /* min-width: 70px; */
    /* height: 50%; */

    /* 
    ${mq[0]} {
      height: 100px;
    }
    ${mq[1]} {
      height: 100px;
    }
    ${mq[2]} {
      height: 100px;
    }

    ${mq[3]} {
      height: 130px;
    } */

    /* ${hq[0]} {
      height: 90px;
    }
    ${hq[1]} {
      height: 90px;
    }

    ${hq[2]} {
      height: 100px;
    }

    ${hq[3]} {
      height: 130px;
    } */

    /* min-height: 0; */
    /* height: 50px; */
    /* min-height: 40px; */
    /* height: 100%; */
    /* height: 200px; */
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
      padding: 12px;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }
`;

// export const CalendarContainer = styled.div`
/* .react-calendar {
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    border: none;
    box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
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
  }

  .react-calendar__tile.react-calendar__tile--now.react-calendar__tile--hasActive.react-calendar__year-view__months__month.react-calendar__month-view__weekdays__weekday {
    font-size: 16px;
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
  }
  .react-calendar__tile:enabled:focus {
    background: none;
    & abbr {
      background-color: #4e8dd4;
      color: white;
      border-radius: 50%;
      padding: 12px;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  } */
// `;

export const recordContainer = styled.div`
  /* min-width: 1000px; */
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
  border-radius: 24px;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border: 1px solid #25d790;
`;

export const SearchForm = styled.div`
  /* position: relative; */
  display: flex;
  /* justify-content: end; */
`;

export const SearchBox = styled.div`
  position: relative;
  padding: 8px 15px;
  background: #fff;
  width: 100%;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  position: relative;
  margin-bottom: 15px;
  /* border: 1px solid #25d790; */
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
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const NewsGroup = styled.div`
  margin-bottom: 10px;
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

export const StockPriceGroup = styled.div``;
// export const MemoContainer = styled.div<MemoContainerProps>`
//   width: 30%;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
//   background: #f5f6fa;
//   ${(props) =>
//     props.active === true &&
//     css`
//       background: pink;
//     `}
// `;
