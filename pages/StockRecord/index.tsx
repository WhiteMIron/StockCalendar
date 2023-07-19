import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import {
  AddButton,
  Button,
  CalendarBox,
  CalendarContainer,
  Dot,
  DownButton,
  Input,
  Label,
  Nav,
  NavTitle,
  SearchBox,
  SearchContainer,
  SearchForm,
  SearchImg,
  SearchInput,
  StockItem,
  UpButton,
} from './styles';
import { stockItem } from '../../mockup/stockItem';
import StocksMemo from '@components/StocksMemo/StocksMemo';
import StocksReadMemo from '@components/StocksMemo/StocksReadMemo';
import SideNav from '@components/SideNav/SideNav';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import useSWR from 'swr';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import { Redirect } from 'react-router';
type ValuePiece = Date | null;

const Login = () => {
  const [value, onChangeValue]: any = useState(new Date());
  // const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());
  const [mark, setMark] = useState(['2023-04-27']);
  const [stockState, onStockState] = useState('');
  const [selected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: '',
    title: '',
    desc: '',
    reason: '',
  });
  const [isRecord, setIsRecord] = useState(false);
  const [isClickSearchInput, setIsClickSearchInput] = useState(false);
  const [item, setItem] = useState(stockItem);
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const onClickDay = () => {
    setIsSelected(false);
    setIsRecord(false);
  };
  const onClickAddBtn = () => {
    setIsRecord(true);
    setIsSelected(false);
  };
  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);
  const series = [
    {
      name: 'Desktops',
      data: [
        {
          x: 'ABC',
          y: 10,
        },
        {
          x: 'DEF',
          y: 60,
        },
        {
          x: 'XYZ',
          y: 41,
        },
      ],
    },
    {
      name: 'Mobile',
      data: [
        {
          x: 'ABCD',
          y: 10,
        },
        {
          x: 'DEFG',
          y: 20,
        },
        {
          x: 'WXYZ',
          y: 51,
        },
        {
          x: 'PQR',
          y: 30,
        },
        {
          x: 'MNO',
          y: 20,
        },
        {
          x: 'CDE',
          y: 30,
        },
      ],
    },
  ];
  const options: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: 'treemap',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: '',
      align: 'center',
    },
  };

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div
      style={{
        minWidth: '1000px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // padding: '80px',
      }}
    >
      {/* <div onClick={onLogout}>로그아웃</div> */}
      <div
        style={{
          height: '10%',
          boxShadow: '0 0 5px 0 rgba(0,0,0,0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1)',
          background: '#60d6bf',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ padding: '0 20px 0 0', width: '100%', textAlign: 'right' }}>
          <h1 style={{ color: '#fff' }}>5월 9일 22:58 test@naver.com</h1>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <SideNav />
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            width: '100%',
            padding: '20px 10px  60px 20px',
            borderBottomRightRadius: '8px',
            // boxShadow: '0 0 5px 0 rgba(0,0,0,0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1)',
            height: 'fit-content',
            minHeight: '100%',
          }}
        >
          <CalendarContainer>
            <SearchForm>
              <SearchBox>
                <SearchInput
                  placeholder="종목명을 입력해주세요."
                  onClick={() => {
                    if (!isClickSearchInput) {
                      setIsClickSearchInput(!isClickSearchInput);
                    }
                  }}
                  onBlur={() => {
                    setIsClickSearchInput(!isClickSearchInput);
                  }}
                ></SearchInput>
                <SearchImg
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                  alt="검색"
                ></SearchImg>
                {isClickSearchInput === true ? <SearchContainer></SearchContainer> : <></>}
              </SearchBox>
            </SearchForm>
            <CalendarBox>
              <Calendar
                onClickDay={onClickDay}
                onChange={onChangeValue}
                value={value}
                showNeighboringMonth={false}
                calendarType="US"
                formatDay={(locale, date) => moment(date).format('DD')}
                tileContent={({ date, view }) => {
                  let html = [];
                  if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                    html.push(<Dot />);
                  }
                  return (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{html}</div>
                    </>
                  );
                }}
              />
            </CalendarBox>
          </CalendarContainer>

          {/* stockList */}
          <div
            style={{
              // width: '10%',
              flex: '1 20%',
              borderRadius: '8px',
              boxShadow: '0 2px 8px 0 rgba(99, 99, 99, 0.2)',
              marginRight: '15px',
              minWidth: '200px',
              textAlign: 'center',
              // background: '#f5f6fa',
              background: 'white',
              padding: '10px 10px',
            }}
          >
            <Button width="100%" color="#60d6bf" onClick={onClickAddBtn}>
              +추가
            </Button>
            <ul className="stock-list">
              {item.map((item: any) => (
                <StockItem
                  key={item.id}
                  onClick={(e) => {
                    setIsSelected(true);
                    setSelectedItem(item);
                    setIsRecord(false);
                  }}
                >
                  {item.title}
                </StockItem>
              ))}
            </ul>
          </div>

          {selected ? <StocksReadMemo></StocksReadMemo> : null}
          {isRecord ? <StocksMemo selectedItem={selectedItem}></StocksMemo> : null}
        </div>
      </div>
      {/* <ReactApexChart options={options} type="line" height={350} /> */}
      {/* <ReactApexChart options={options} series={series} type="treemap" height={350} /> */}
    </div>
  );
};

export default Login;

{
  /* <div style={{ textAlign: 'center' }} className="text-gray-500 mt-4">
        {moment(value).format('YYYY년 MM월 DD일')}
      </div> */
}
