import { css } from '@emotion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  StockTitle,
  UpButton,
  DateInfo,
  DateInfoGroup,
  SearchItem,
} from './styles';
import StocksMemo from '@components/StocksMemo/StocksMemo';
import StocksReadMemo from '@components/StocksMemo/StocksReadMemo';
import SideNav from '@components/SideNav/SideNav';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import useSWR from 'swr';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';

import { Navigate, useNavigate } from 'react-router';
import Layout from '@components/Layout';
import StocksList from '@components/StockList/StockList';
import { ISearch, Istock } from '@typings/stock';
import StocksEditMemo from '@components/StocksMemo/StocksEditMemo';
import StocksTodayMemo from '@components/StocksMemo/StocksTodayMemo';
import { DateValue } from '@typings/date';
import { abort } from 'process';
import useInput from '@hooks/useInput';

const StockRecord = () => {
  const [dateValue, onChangeDateValue] = useState<DateValue>(new Date());
  const navigate = useNavigate();

  const [stocks, setStocks] = useState<Istock[]>([]);
  const [selectedItem, setSelectedItem] = useState<Istock | null>(null);
  const [searchCandidateResult, setSearchCandidateResult] = useState<ISearch[]>([]);
  const [searchWord, onChangeSearchWord, setSearchWord] = useInput('');

  const [mark, setMark] = useState([]);
  const [searchMark, setSearchMark] = useState<ISearch[]>([]);

  const [selected, setIsSelected] = useState(false);

  const [isRecord, setIsRecord] = useState(false);
  const [isEditRecord, setIsEditRecord] = useState(false);

  const [isClickSearchInput, setIsClickSearchInput] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [resetRecordState, setResetRecordState] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);

  const autoRef = useRef<HTMLLIElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });

  const onClickDay = () => {
    setIsRecord(false);
    setSelectedItem(null);
    setIsSelected(false);
    setIsEditRecord(false);
  };
  const onClickAddBtn = () => {
    if (isRecord && !resetRecordState) {
      setResetRecordState(true);
    }
    setSelectedItem(null);
    setIsRecord(true);
    setIsSelected(false);
    setIsEditRecord(false);
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

  const onStock = (stock: Istock) => {
    let stockTmp = stock;

    if (!Array.isArray(stockTmp.news)) {
      stockTmp.news = JSON.parse(stockTmp.news);
    }

    setSelectedItem(stockTmp);

    setIsSelected(true);
    setIsRecord(false);
    setIsEditRecord(false);
  };

  const onActiveStartDateChange = () => {
    const navigation__label = document.querySelector('.react-calendar__navigation__label > span') as HTMLElement;
    let startDate = navigation__label.innerText;

    startDate = startDate.replaceAll('월', '/');
    let startDateArr = [];
    startDateArr = startDate.split('년 ');
    if (startDateArr[1].length < 2) {
      startDateArr[1] = startDateArr[1].padStart(2, '0');
    }
    startDate = startDateArr.join('-');
  };
  const onClickSearchItem = (name: String) => {
    const searchResult = searchCandidateResult.filter((searchItem: ISearch) => {
      return searchItem.name === name;
    });
    setSearchMark(searchResult);
  };

  const changeIdxNum = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setFocusIdx((prev) => (prev + 1) % searchCandidateResult.length);
      setSearchWord(searchCandidateResult[(focusIdx + 1) % searchCandidateResult.length]?.name);
    }
    if (e.key === 'ArrowUp') {
      setFocusIdx((prev) => (prev - 1 + searchCandidateResult.length) % searchCandidateResult.length);
      setSearchWord(
        searchCandidateResult[(focusIdx - 1 + searchCandidateResult.length) % searchCandidateResult.length]?.name,
      );
    }
    if (e.key === 'Escape') {
      setFocusIdx(-1);
    }
    if (e.key === 'Enter') {
      setSearchWord(searchCandidateResult[focusIdx]?.name);
    }
  };
  if (!userData) {
    navigate('/login');
    // return <Navigate to="/login"></Navigate>;
  }

  useEffect(() => {
    let dateTmp;
    if (dateValue) {
      dateTmp = new Date(dateValue?.toString());

      const date = moment(dateTmp).format('YYYY/MM/DD');
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
    }
    return;
  }, [dateValue]);

  useEffect(() => {
    if (isClickSearchInput) {
      axios
        .get('/api/word-search', { params: { word: searchWord } })
        .then((response) => {
          if (response.data) {
            setIsSearched(() => {
              return true;
            });
            let searchCandidateResult = response.data;
            const nameUnique = searchCandidateResult.filter((searchItem: ISearch, idx: number, arr: ISearch[]) => {
              return arr.findIndex((item) => item.name === searchItem.name) === idx;
            });

            setSearchCandidateResult(nameUnique);
          } else {
            setIsSearched(false);
          }
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    }
    return;
  }, [searchWord]);
  return (
    <Layout user={userData}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            width: '100%',
            padding: '20px',
            borderBottomRightRadius: '8px',
          }}
        >
          <CalendarContainer>
            <SearchForm>
              <SearchBox className={isSearched === true ? 'active' : ''}>
                <SearchInput
                  ref={searchInputRef}
                  type="text"
                  placeholder="종목명을 입력해주세요."
                  onKeyDown={changeIdxNum}
                  onClick={() => {
                    if (!isClickSearchInput) {
                      setIsClickSearchInput(!isClickSearchInput);
                      // setMark([]);
                    }
                  }}
                  onChange={onChangeSearchWord}
                  onBlur={() => {
                    setIsClickSearchInput(!isClickSearchInput);
                    setIsSearched(false);
                  }}
                  value={searchWord}
                ></SearchInput>
                <SearchImg
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                  alt="검색"
                ></SearchImg>
                {isClickSearchInput ? <SearchContainer className={isSearched ? 'searched' : ''} /> : <></>}
              </SearchBox>

              {isSearched ? (
                <div
                  style={{
                    position: 'absolute',
                    border: '1px rgba(0, 0, 0, 0.2) solid',
                    width: '100%',
                    zIndex: '1',
                    left: '0',
                    bottom: '-200px',
                    backgroundColor: '#fff',
                    borderTop: 'none',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    overflow: 'auto',
                    height: '200px',
                  }}
                >
                  <ul
                    style={{
                      margin: '0',
                    }}
                  >
                    {searchCandidateResult.map((search, idx: number) => (
                      <SearchItem
                        key={search.name}
                        onClick={() => {
                          onClickSearchItem(search.name);
                        }}
                        isFocus={focusIdx === idx}
                      >
                        {search.name}
                      </SearchItem>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </SearchForm>
            <CalendarBox>
              <Calendar
                onActiveStartDateChange={onActiveStartDateChange}
                onClickDay={onClickDay}
                onChange={onChangeDateValue}
                value={dateValue}
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
            <StocksTodayMemo dateValue={dateValue} selectedDate={moment(dateValue?.toString()).format('YYYY/MM/DD')} />
          </CalendarContainer>
          <StocksList stocks={stocks} onStock={onStock}>
            <Button width="100%" color="#60d6bf" onClick={onClickAddBtn}>
              +추가
            </Button>
            <DateInfoGroup>
              {dateValue ? <DateInfo>{moment(dateValue?.toString()).format('YYYY/MM/DD')}</DateInfo> : null}
            </DateInfoGroup>
          </StocksList>

          {selected ? (
            <StocksReadMemo
              stocks={stocks}
              setStocks={setStocks}
              selectedItem={selectedItem}
              setIsSelected={setIsSelected}
              setIsRecord={setIsRecord}
              setIsEditRecord={setIsEditRecord}
            ></StocksReadMemo>
          ) : null}

          {isRecord ? (
            <StocksMemo
              setResetRecordState={setResetRecordState}
              resetRecordState={resetRecordState}
              setIsEditRecord={setIsEditRecord}
              isEditRecord={isEditRecord}
              stocks={stocks}
              setStocks={setStocks}
              setIsSelected={setIsSelected}
              setIsRecord={setIsRecord}
              selectedItem={selectedItem}
              selectedDate={moment(dateValue?.toString()).format('YYYY/MM/DD')}
              setIsSelectedItem={setSelectedItem}
            ></StocksMemo>
          ) : null}

          {isEditRecord ? (
            <StocksEditMemo
              setIsEditRecord={setIsEditRecord}
              isEditRecord={isEditRecord}
              stocks={stocks}
              setStocks={setStocks}
              setIsSelected={setIsSelected}
              setIsRecord={setIsRecord}
              selectedItem={selectedItem}
              selectedDate={moment(dateValue?.toString()).format('YYYY/MM/DD')}
              setIsSelectedItem={setSelectedItem}
            ></StocksEditMemo>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default StockRecord;
