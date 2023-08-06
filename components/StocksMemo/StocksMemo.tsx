import React, { SetStateAction, useCallback, useEffect, useState, ChangeEvent } from 'react';

import styled from '@emotion/styled';
import {
  Button,
  Input,
  Label,
  MemoContainer,
  BtnGroup,
  Form,
  StockInfo,
  Error,
  TextArea,
  DateInfo,
  SelectButton,
} from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockInfoGroup } from '@pages/StockRecord/styles';
import ModalPortal from '@components/Modal/ModalPotal';
import Modal from '@components/Modal/Modal';
import { CSSTransition } from 'react-transition-group';
import useInput from '@hooks/useInput';
import BackDrop from '@components/Modal/BackDrop';
import axios from 'axios';
import { Istock } from '@typings/stock';
import moment from 'moment';
import info from '@images/info.png';
import { cmpToday, isEmpty } from '@utils/common';
interface itemProps {
  stocks: Istock[];
  selectedItem: Istock | null;
  selectedDate: string;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  setIsSelectedItem: React.Dispatch<SetStateAction<Istock | null>>;

  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
  setResetRecordState: React.Dispatch<SetStateAction<boolean>>;
  isEditRecord: boolean;
  resetRecordState: boolean;
}

interface ObjType {
  [key: string]: boolean;
}

const StocksMemo = ({
  resetRecordState,
  stocks,
  setStocks,
  setIsRecord,
  selectedItem,
  selectedDate,
  isEditRecord,
  setIsEditRecord,
  setIsSelected,
  setResetRecordState,
  setIsSelectedItem,
}: itemProps) => {
  const [isInterest, setIsInterest] = useState<boolean | null>(null);
  const [priceStatus, setPriceStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [stockName, onStockName, setStockName] = useInput(selectedItem?.name);

  const [stockCode, onStockCode, setStockCode] = useInput(selectedItem?.stock_code);

  const [stockCategory, onCategory, setCategory] = useInput(selectedItem?.Category.name);
  const [stockCurrentPrice, onStockCurrentPrice, setStockCurrentPrice] = useInput(selectedItem?.current_price);
  const [stockDiffPrice, onDiffPrice, setDiffPrice] = useInput(selectedItem?.diff_price);
  const [stockDaysRange, onStockDaysRange, setStockDaysRange] = useInput(selectedItem?.days_range);
  const [stockIssue, onStockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, onFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, onSecondNews, setSecondNews] = useInput('');

  const [checks, setChecks] = useState<ObjType>({
    code: false,
    category: false,

    priceStatus: false,
    currentPrice: false,
    diffPrice: false,
    daysRange: false,
    isInterest: false,
  });

  const numRegex = /^[0-9]+$/;
  const percentRegex = /^([0-9]{1}\d{0,2}[.]\d{2,2})?$/;

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (resetRecordState) {
      setStockCode('');
      setCategory('');
      setDiffPrice('');
      setStockDaysRange('');
      setStockIssue('');
      setFirstNews('');
      setSecondNews('');
      setStockCurrentPrice('');
      setResetRecordState(false);
      setPriceStatus('');
      setStockDaysRange('');

      setChecks({
        ...checks,
        code: false,
        category: false,
        currentPrice: false,
        diffPrice: false,
        daysRange: false,
        priceStatus: false,
        isInterest: false,
      });
    }
    return;
  }, [resetRecordState]);

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();

      let newsArr = [];
      newsArr.push(stockFirstNews);
      newsArr.push(stockSecondNews);
      let params;
      if (cmpToday(selectedDate)) {
        params = {
          code: stockCode,
          categoryName: stockCategory,
          date: selectedDate,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
        };
      } else {
        params = {
          code: stockCode,
          categoryName: stockCategory,
          date: selectedDate,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
          diffPrice: stockDiffPrice,
          currentPrice: stockCurrentPrice,
          daysRange: stockDaysRange,
        };
      }
      axios
        .post('/api/stock', params)
        .then((response) => {
          setIsRecord(false);
          setStocks([...stocks, response.data]);
          setIsSelectedItem(response.data);
        })
        .catch((error) => {
          alert(error.response.data);
          console.log(error.response);
        })
        .finally(() => {});
    },
    [stockCode, stockCategory, stockFirstNews, stockSecondNews, isInterest, stockIssue, selectedDate],
  );

  return (
    <MemoContainer>
      <FormContainer
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          overscrollBehavior: 'contain',
          height: '100%',
        }}
      >
        <Form>
          {cmpToday(selectedDate) ? (
            <StockInfoGroup>
              <Label>
                <StockInfo>
                  <span>종목코드</span>
                </StockInfo>
                <Input
                  type="text"
                  marginBottom="10px"
                  value={stockCode || ''}
                  onChange={onStockCode}
                  onBlur={() => {
                    if (!checks.code) {
                      setChecks({ ...checks, code: !checks.code });
                    }
                  }}
                ></Input>
              </Label>
              {checks.code && !stockCode ? (
                <Error>종목코드를 입력해주세요.</Error>
              ) : checks.code && !numRegex.test(stockCode || '') ? (
                <Error>숫자만 입력해주세요.</Error>
              ) : (
                <></>
              )}{' '}
            </StockInfoGroup>
          ) : (
            <>
              <StockInfoGroup>
                <Label>
                  <StockInfo>
                    <span>종목코드</span>
                  </StockInfo>
                  <Input
                    type="text"
                    marginBottom="10px"
                    value={stockCode || ''}
                    onChange={onStockCode}
                    onBlur={() => {
                      console.log(numRegex.test('이름'));
                      if (!checks.code) {
                        setChecks({ ...checks, code: !checks.code });
                      }
                    }}
                  ></Input>
                </Label>
                {checks.code && !stockCode ? (
                  <Error>종목코드를 입력해주세요.</Error>
                ) : checks.code && !numRegex.test(stockCode || '') ? (
                  <Error>숫자만 입력해주세요.</Error>
                ) : (
                  <></>
                )}{' '}
              </StockInfoGroup>

              <StockInfoGroup>
                <Label htmlFor="currentPrice">
                  <StockInfo>
                    <span>종가</span>
                    <Icon>
                      <img src={info} width="13px" height="13px"></img>
                      <span>오늘일자가 아닌경우 입력데이터가 추가로 필요합니다.</span>
                    </Icon>
                  </StockInfo>
                  <Input
                    id="currentPrice"
                    type="text"
                    marginBottom="10px"
                    value={stockCurrentPrice || ''}
                    onChange={onStockCurrentPrice}
                    onBlur={() => {
                      if (!checks.currentPrice) {
                        setChecks({ ...checks, currentPrice: !checks.currentPrice });
                      }
                    }}
                  ></Input>
                </Label>{' '}
                {checks.currentPrice && !stockCurrentPrice ? (
                  <Error>종가를 입력해주세요.</Error>
                ) : checks.currentPrice && !numRegex.test(stockCurrentPrice || '') ? (
                  <Error>숫자만 입력해주세요.</Error>
                ) : (
                  <></>
                )}{' '}
              </StockInfoGroup>
              <StockInfoGroup>
                <Label htmlFor="priceStatus">
                  <span style={{ marginBottom: '8px' }}>전일대비 (ex: 8500) </span>{' '}
                  <BtnGroup justifyContent="start" marginBottom="10px">
                    {priceStatus === 'up' ? (
                      <SelectButton
                        type="button"
                        marginRight="10px"
                        bgColor="red"
                        onClick={() => {
                          setPriceStatus(() => 'up');
                        }}
                      >
                        +
                      </SelectButton>
                    ) : (
                      <SelectButton
                        type="button"
                        marginRight="10px"
                        bgColor="red"
                        onClick={() => {
                          setPriceStatus(() => 'up');
                        }}
                        opacity="0.5"
                      >
                        +
                      </SelectButton>
                    )}
                    {priceStatus === 'down' ? (
                      <SelectButton
                        type="button"
                        marginRight="10px"
                        bgColor="dodgerblue"
                        onClick={() => {
                          setPriceStatus(() => 'down');
                        }}
                      >
                        -
                      </SelectButton>
                    ) : (
                      <SelectButton
                        type="button"
                        marginRight="10px"
                        bgColor="dodgerblue"
                        onClick={() => {
                          setPriceStatus(() => 'down');
                        }}
                        opacity="0.5"
                      >
                        -
                      </SelectButton>
                    )}
                  </BtnGroup>
                  <Input
                    id="priceStatus"
                    type="text"
                    marginBottom="10px"
                    value={stockDiffPrice || ''}
                    onChange={onDiffPrice}
                    onBlur={() => {
                      if (!checks.diffPrice) {
                        if (!stockDiffPrice) {
                          setChecks((prev) => {
                            return {
                              ...prev,
                              ['diffPrice']: true,
                            };
                          });
                        } else {
                          setChecks((prev) => {
                            return {
                              ...prev,
                              ['diffPrice']: false,
                            };
                          });
                        }
                        if (!checks.priceStatus) {
                          if (!isEmpty(priceStatus)) {
                            setChecks((prev) => {
                              return {
                                ...prev,
                                ['priceStatus']: true,
                              };
                            });
                          } else {
                            setChecks((prev) => {
                              return {
                                ...prev,
                                ['priceStatus']: true,
                              };
                            });
                          }
                        }
                      }
                    }}
                  ></Input>
                </Label>{' '}
                {checks.priceStatus && !priceStatus ? <Error>+/-를 선택해주세요.</Error> : <></>}
                {checks.diffPrice && !stockDiffPrice ? (
                  <Error>전일대비를 입력해주세요.</Error>
                ) : checks.diffPrice && !numRegex.test(stockDiffPrice || '') ? (
                  <Error>숫자만 입력해주세요.</Error>
                ) : (
                  <></>
                )}{' '}
              </StockInfoGroup>
              <StockInfoGroup>
                <Label>
                  <StockInfo>
                    <span>등락률 (ex: 3.18, 0.00) </span>
                  </StockInfo>

                  <Input
                    type="text"
                    marginBottom="10px"
                    value={stockDaysRange || ''}
                    onChange={onStockDaysRange}
                    onBlur={() => {
                      if (!checks.daysRange) {
                        setChecks({ ...checks, daysRange: !checks.daysRange });
                      }
                    }}
                  ></Input>
                </Label>{' '}
                {checks.daysRange && !stockDaysRange ? (
                  <Error>등락률을 입력해주세요.</Error>
                ) : checks.daysRange && !percentRegex.test(stockDaysRange || '') ? (
                  <Error>형식에 맞춰서 입력해주세요.</Error>
                ) : (
                  <></>
                )}{' '}
              </StockInfoGroup>
            </>
          )}

          <StockInfoGroup>
            <Label>
              <StockInfo>
                <span> 카테고리</span>
              </StockInfo>
              <Input
                marginBottom="10px"
                value={stockCategory || ''}
                onChange={onCategory}
                onBlur={() => {
                  if (!checks.category) {
                    if (!stockCategory) {
                      setChecks({ ...checks, category: true });
                    } else {
                      setChecks({ ...checks, category: false });
                    }
                  }
                }}
              ></Input>
            </Label>{' '}
            {checks.category && !stockCategory ? <Error>카테고리를 입력해주세요.</Error> : <></>}
          </StockInfoGroup>
          <ChangeInfoGroup>
            <Content>
              <span>관심종목</span>
            </Content>
            <BtnGroup justifyContent="start" marginBottom="10px">
              {isInterest === true ? (
                <SelectButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(() => true);
                  }}
                  bgColor="red"
                >
                  예
                </SelectButton>
              ) : (
                <SelectButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(() => true);
                  }}
                  opacity="0.5"
                  bgColor="red"
                >
                  예
                </SelectButton>
              )}

              {isInterest == false ? (
                <SelectButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(false);
                  }}
                  bgColor="dodgerblue"
                >
                  아니오
                </SelectButton>
              ) : (
                <SelectButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(false);
                  }}
                  opacity="0.5"
                  bgColor="dodgerblue"
                >
                  아니오
                </SelectButton>
              )}
            </BtnGroup>{' '}
            {checks.isInterest && isInterest == null ? <Error>관심종목 여부를 선택해주세요.</Error> : <></>}
          </ChangeInfoGroup>

          <Label>
            <StockInfoGroup>
              <span>이슈</span>
              <TextArea
                value={stockIssue || ''}
                onClick={() => {
                  if (!checks.isInterest) {
                    console.log(checks.isInterest);

                    setChecks({ ...checks, isInterest: !checks.isInterest });
                  }
                }}
                onChange={onStockIssue}
                style={{
                  wordBreak: 'keep-all',
                  textAlign: 'justify',
                  height: '360px',
                }}
              ></TextArea>
            </StockInfoGroup>
          </Label>

          <NewsGroup>
            <Label>
              <span>뉴스</span>
              <Input marginBottom="10px" value={stockFirstNews || ''} onChange={onFirstNews}></Input>
            </Label>
            <Input marginBottom="10px" value={stockSecondNews || ''} onChange={onSecondNews}></Input>
          </NewsGroup>
        </Form>
      </FormContainer>
      <BtnGroup padding="20px">
        <Button
          type="button"
          width="100%"
          bgColor="#fff"
          color="#00BB9D"
          marginRight="10px"
          isBorder={true}
          onClick={() => {
            if (isEditRecord) {
              setIsSelected(true);
            }
            setIsRecord(false);
            setIsEditRecord(false);
          }}
        >
          취소
        </Button>
        <Button
          type="button"
          width="100%"
          bgColor="#00BB9D"
          color="#fff"
          onClick={() => {
            if (stockCode && stockCategory) {
              handleModal();
            } else {
              for (let key in checks) {
                if (!checks[key]) {
                  console.log('key:', key, 'checks', checks[key]);
                  setChecks((checks) => ({
                    ...checks,
                    [key]: true,
                  }));
                }
              }
            }
          }}
        >
          저장
        </Button>
      </BtnGroup>

      <ModalPortal onClose={handleModal}>
        <CSSTransition
          in={modalOpen}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 100 }}
          classNames="backdrop"
        >
          <BackDrop onClose={() => setModalOpen(false)} />
        </CSSTransition>

        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={{ enter: 300, exit: 100 }} classNames="modal">
          <Modal title={'입력한 내용으로 저장하시겠습니까?'}>
            <BtnGroup justifyContent="center">
              <Button
                type="button"
                width="25%"
                onClick={() => {
                  setModalOpen(false);
                }}
                bgColor="#8e8e8e"
                marginRight="10px"
                marginBottom="20px"
              >
                취소
              </Button>

              <Button
                type="button"
                width="25%"
                onClick={(e) => {
                  onSubmit(e);
                  setModalOpen(false);
                }}
                bgColor="#00BB9D"
              >
                저장
              </Button>
            </BtnGroup>
          </Modal>
        </CSSTransition>
      </ModalPortal>
    </MemoContainer>
  );
};

const FormContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  height: 100%;
`;

const Icon = styled.div`
  margin-left: 5px;
  display: inline;
  position: relative;

  > span {
    position: absolute;
    background-color: #333;
    width: 400px;
    color: #fff;
    top: -40px;
    left: 150px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.5s;

    visibility: hidden;
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;
export default StocksMemo;
