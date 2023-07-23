import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
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
  NewStockAlert,
  SearchBox,
  SearchContainer,
  SearchForm,
  SearchImg,
  SearchInput,
  StockItem,
  StockTitle,
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
// import { Redirect, useNavigate } from 'react-router';

import { Navigate, useNavigate } from 'react-router';
import Layout from '@components/Layout';
type ValuePiece = Date | null;
interface Istock {
  id: number;
  name: string;
  current_price: string;
  previous_close: string;
  days_range: string;
  title: string;
  desc: string;
  reason: string;
  createdAt: Date;
}
//
const StockRecord = () => {
  // const [value, onChangeValue] = useState(new Date());
  // const [value, onChangeValue] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());
  const [dateValue, onChangeDateValue] = useState<Date | null | [Date | null, Date | null]>(new Date());

  const navigate = useNavigate();

  const [stocks, setStocks] = useState<Istock[]>([]);
  const [selectedItem, setSelectedItem] = useState<Istock>();
  const [mark, setMark] = useState(['2023-04-27']);
  const [selected, setIsSelected] = useState(false);

  const [isRecord, setIsRecord] = useState(false);
  const [isClickSearchInput, setIsClickSearchInput] = useState(false);

  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });

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
    navigate('/login');
  }

  useEffect(() => {
    const date = moment(dateValue?.toString()).format('YYYY/MM/DD');
    axios
      .get('/api/stock', { params: { date: date } })
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {
        setIsSelected(false);
        setIsRecord(false);
      });
    return;
  }, [dateValue]);

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            width: '100%',
            padding: '20px 20px 40px 20px',
            borderBottomRightRadius: '8px',
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
                // onClickDay={onClickDay}
                onChange={onChangeDateValue}
                value={dateValue}
                showNeighboringMonth={false}
                maxDate={new Date()}
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
              flex: '1 25%',
              borderRadius: '8px',
              boxShadow: '0 2px 8px 0 rgba(99, 99, 99, 0.2)',
              marginRight: '15px',
              minWidth: '200px',
              textAlign: 'center',
              background: 'white',
              padding: '10px 10px',
            }}
          >
            <Button width="100%" color="#60d6bf" onClick={onClickAddBtn}>
              +추가
            </Button>
            <ul className="stock-list">
              {stocks.map((stock: Istock) => (
                <StockItem
                  key={stock.id}
                  onClick={(e) => {
                    setIsSelected(true);
                    setSelectedItem(stock);
                    setIsRecord(false);
                  }}
                >
                  <StockTitle
                    new={moment(stock.createdAt).format('YYYY/MM/DD') === moment().format('YYYY/MM/DD') ? true : false}
                  >
                    {stock.name}
                  </StockTitle>
                </StockItem>
              ))}
            </ul>
          </div>

          {selected ? <StocksReadMemo></StocksReadMemo> : null}
          {isRecord ? (
            <StocksMemo
              stocks={stocks}
              setStocks={setStocks}
              setIsRecord={setIsRecord}
              selectedItem={selectedItem}
              selectedDate={moment(dateValue?.toString()).format('YYYY/MM/DD')}
            ></StocksMemo>
          ) : null}
        </div>
      </div>
      {/* <ReactApexChart options={options} type="line" height={350} /> 
      <ReactApexChart options={options} series={series} type="treemap" height={350} /> */}
    </Layout>
  );
};

export default StockRecord;

// {
/* <div style={{ textAlign: 'center' }} className="text-gray-500 mt-4">
        {moment(value).format('YYYY년 MM월 DD일')}
      </div> */
// }
