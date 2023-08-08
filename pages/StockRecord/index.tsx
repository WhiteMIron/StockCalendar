import { css } from '@emotion/react';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import {
  AddButton,
  Button,
  CalendarBox,
  CalendarContainer,
  SearchDot,
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
  DataDot,
} from './styles';
import StocksWriteMemo from '@components/StocksMemo/StocksWriteMemo';
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
import { ISearch, IrequestSearch, Istock } from '@typings/stock';
import StocksEditMemo from '@components/StocksMemo/StocksEditMemo';
import StocksTodayMemo from '@components/StocksMemo/StocksTodayMemo';
import { DateValue } from '@typings/date';
import useInput from '@hooks/useInput';
import { isEmpty } from '@utils/common';
import uuid from 'react-uuid';
import { start } from 'repl';

const StockRecord = () => {
  const [dateValue, onChangeDateValue] = useState<DateValue>(new Date());
  const navigate = useNavigate();

  const [stocks, setStocks] = useState<Istock[]>([]);
  const [selectedItem, setSelectedItem] = useState<Istock | null>(null);
  const [searchCandidateUniqueResult, setSearchCandidateUniqueResult] = useState<ISearch[]>([]);
  const [searchCandidateDupResult, setSearchCandidateDupResult] = useState<ISearch[]>([]);
  const [searchWord, setSearchWord] = useState('');

  const [dataMark, setDataMark] = useState<ISearch[] | null>([]);
  const [searchMark, setSearchMark] = useState<ISearch[] | null>([]);

  const [selected, setIsSelected] = useState(false);

  const [isRecord, setIsRecord] = useState(false);
  const [isEditRecord, setIsEditRecord] = useState(false);

  const [isClickSearchInput, setIsClickSearchInput] = useState(false);
  const [isClickSearched, setIsClickSearched] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const [resetRecordState, setResetRecordState] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);
  const [isMovingKey, setIsMovingKey] = useState(false);

  const [startDate, setStartDate] = useState(moment(dateValue?.toString()).format('YYYY/MM'));

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
    startDate = startDate.replaceAll('월', '');

    let startDateArr = [];
    startDateArr = startDate.split('년 ');
    if (startDateArr[1]?.length < 2) {
      startDateArr[1] = startDateArr[1].padStart(2, '0');
    }
    startDate = startDateArr.join('/');
    setStartDate(startDate);
  };
  const onClickSearchItem = (e: React.MouseEvent<HTMLLIElement>) => {
    setIsClickSearched(true);

    if (e.currentTarget.dataset.name) {
      setSearchWord(e.currentTarget.dataset.name);
    }

    axios
      .get('/api/word-search', { params: { word: searchWord } })
      .then((response) => {
        if (!isEmpty(response.data)) {
          setIsSearched(() => {
            return true;
          });

          setSearchMark(() => {
            return response.data;
          });
        } else {
          setIsSearched(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {
        setIsClickSearched(true);
        setIsSearched(false);
      });
  };

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setIsClickSearched(false);
    setSearchWord(e.target.value);

    if (isMovingKey) {
      setIsMovingKey(false);
    }
  };
  const mousedown = (index: number) => {
    setFocusIdx(index);
    setIsMovingKey(false);
  };

  const changeIdxNum = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        if (!isSearched && !isEmpty(searchCandidateDupResult)) {
          setIsSearched(true);
        }
        setIsMovingKey(true);
        setFocusIdx((prev) => {
          return prev < searchCandidateUniqueResult.length - 1 ? prev + 1 : -1;
        });
        setSearchWord(
          searchCandidateUniqueResult[focusIdx < searchCandidateUniqueResult.length - 1 ? focusIdx + 1 : focusIdx]
            ?.name,
        );
      }
      if (e.key === 'ArrowUp') {
        if (!isSearched && !isEmpty(searchCandidateDupResult)) {
          setIsSearched(true);
        }

        setIsMovingKey(true);
        setFocusIdx((prev) => (prev > 0 ? prev - 1 : prev + 1));
        setSearchWord(searchCandidateUniqueResult[focusIdx > 0 ? focusIdx - 1 : 0]?.name);
      }
      if (e.key === 'Escape') {
        setFocusIdx(-1);
      }
      if (e.key === 'Enter') {
        let params;

        if (!isMovingKey) {
          setSearchWord((prev) => {
            return (prev = searchCandidateUniqueResult[focusIdx]?.name);
          });

          params = {
            word: searchCandidateUniqueResult[focusIdx]?.name,
          };
        } else {
          params = {
            word: searchWord,
          };
        }
        axios
          .get('/api/word-search', { params: params })
          .then((response) => {
            let searchResult = response.data;
            if (!isEmpty(response.data)) {
              setIsSearched(() => {
                return true;
              });
              setSearchMark(() => {
                return searchResult.filter((searchItem: ISearch) => {
                  return searchItem.name === searchWord;
                });
              });
            } else {
              setIsSearched(false);
              setSearchMark([]);
              setSearchCandidateDupResult(() => []);
              setSearchCandidateUniqueResult(() => []);
            }
          })
          .catch((error) => {
            console.log(error.response);
          })
          .finally(() => {
            setIsClickSearched(true);
            setIsSearched(false);
          });
      }
    },
    [
      setIsMovingKey,
      setFocusIdx,
      setSearchWord,
      setIsClickSearched,
      setIsSearched,
      setSearchMark,
      searchCandidateUniqueResult,
      searchCandidateDupResult,
      searchWord,
      focusIdx,
      isMovingKey,
    ],
  );
  if (!userData) {
    navigate('/login');
    // return <Navigate to="/login"></Navigate>;
  }

  useEffect(() => {
    let abortController = new AbortController();
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
    return () => {
      abortController.abort();
    };
  }, [dateValue]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/api/word-search', { params: { word: searchWord } })
        .then((response) => {
          if (!isEmpty(response.data)) {
            setSearchCandidateDupResult(response.data);
            setIsSearched(() => {
              return true;
            });
            let searchCandidateResult = response.data;
            const nameUnique = searchCandidateResult.filter((searchItem: ISearch, idx: number, arr: ISearch[]) => {
              return arr.findIndex((item) => item.name === searchItem.name) === idx;
            });
            setFocusIdx(-1);
            setSearchCandidateUniqueResult(nameUnique);
          } else {
            setIsSearched(false);
            setSearchCandidateDupResult(() => []);
            setSearchCandidateUniqueResult(() => []);
            setSearchMark([]);
          }
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    };

    if (!isClickSearched && !isMovingKey) {
      fetchData();
    }
    return () => {};
  }, [searchWord]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/api/record-all-search', { params: { startDate: startDate } })
        .then((response) => {
          setDataMark(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    };

    fetchData();
    return () => {};
  }, [startDate, stocks]);

  useEffect(() => {
    console.log('searchMark:', searchMark, ' ', 'isClickSearched:', isClickSearched);
    if (!isEmpty(searchMark)) {
      axios
        .get('/api/word-search', { params: { word: searchWord } })
        .then((response) => {
          let searchResult = response.data;
          if (!isEmpty(response.data)) {
            setSearchMark(() => {
              return searchResult.filter((searchItem: ISearch) => {
                return searchItem.name === searchWord;
              });
            });
          } else {
            setSearchMark([]);
          }
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {});
    }
  }, [stocks]);

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
                  placeholder="종목명을 입력해주세요."
                  onKeyDown={changeIdxNum}
                  onClick={() => {
                    if (isEmpty(searchMark)) {
                      setIsClickSearched(false);
                    }

                    // if(isEmpty(searchMark))
                    // setSearchMark(null);

                    if (!isClickSearchInput) {
                      setIsClickSearchInput(!isClickSearchInput);
                    }

                    if (!isEmpty(searchCandidateDupResult)) {
                      setIsSearched(true);
                    } else {
                      setIsSearched(false);
                    }
                  }}
                  onFocus={() => {
                    setFocusIdx(-1);
                  }}
                  onChange={onChangeSearchWord}
                  onBlur={() => {
                    setIsClickSearchInput(!isClickSearchInput);
                    setIsSearched(() => false);
                    setIsClickSearched(false);
                  }}
                  value={searchWord}
                ></SearchInput>
                <SearchImg
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                  alt="검색"
                  onClick={() => {
                    axios
                      .get('/api/word-search', { params: { word: searchWord } })
                      .then((response) => {
                        let searchResult = response.data;
                        if (!isEmpty(searchResult)) {
                          setIsSearched(() => {
                            return true;
                          });
                          setSearchMark(() => {
                            return searchResult.filter((searchItem: ISearch) => {
                              return searchItem.name === searchWord;
                            });
                          });
                        } else {
                          setSearchCandidateDupResult(() => []);
                          setSearchCandidateUniqueResult(() => []);
                          setSearchMark([]);
                        }
                      })
                      .catch((error) => {
                        console.log(error.response);
                      })
                      .finally(() => {
                        setIsClickSearched(true);
                        setIsSearched(false);
                      });
                  }}
                ></SearchImg>
                {isClickSearchInput && !isSearched ? (
                  <SearchContainer className={isEmpty(searchWord) ? '' : 'searched'} />
                ) : (
                  <></>
                )}
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
                    {searchCandidateUniqueResult.map((search, idx: number) => (
                      <SearchItem
                        key={uuid()}
                        data-name={search.name}
                        onMouseDown={onClickSearchItem}
                        isFocus={focusIdx === idx}
                        onMouseMove={() => mousedown(idx)}
                        isMovingKey={isMovingKey}
                      >
                        {search.name}
                      </SearchItem>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
              {!isEmpty(searchMark) && isClickSearched ? (
                <div style={{ marginTop: '10px', textAlign: 'center' }}>검색 건수 : {searchMark?.length}건</div>
              ) : isClickSearched ? (
                <div style={{ marginTop: '10px', textAlign: 'center' }}>검색 결과가 없습니다.</div>
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
                  if (dataMark?.find((x) => x.register_date === moment(date).format('YYYY/MM/DD'))) {
                    html.push(<DataDot key={uuid()} />);
                  }

                  if (searchMark?.find((x) => x.register_date === moment(date).format('YYYY/MM/DD'))) {
                    html.push(<SearchDot key={uuid()} />);
                  }
                  return (
                    <>
                      <div
                        style={{
                          marginTop: '5px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {html}
                      </div>
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
              setIsSelectedItem={setSelectedItem}
            ></StocksReadMemo>
          ) : null}

          {isRecord ? (
            <StocksWriteMemo
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
            ></StocksWriteMemo>
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
