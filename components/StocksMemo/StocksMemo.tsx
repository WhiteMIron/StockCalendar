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
  const [modalOpen, setModalOpen] = useState(false);

  const [stockCode, onStockCode, setStockCode] = useInput(selectedItem?.stock_code);
  const [stockCategory, onCategory, setCategory] = useInput(selectedItem?.Category.name);
  const [stockCurrentPrice, onStockCurrentPrice, setStockCurrentPrice] = useInput(selectedItem?.current_price);

  const [stockPreviousClose, onPreviousClose, setPreviousClose] = useInput(selectedItem?.previous_close);

  const [stockIssue, onStockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, onFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, onSecondNews, setSecondNews] = useInput('');

  const [checks, setChecks] = useState<ObjType>({
    code: false,
    category: false,
    currentPrice: false,
    previousClose: false,
    isInterest: false,
  });

  const numRegex = /^[0-9]+$/;

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (resetRecordState) {
      setStockCode('');
      setCategory('');
      setPreviousClose('');

      setStockIssue('');
      setFirstNews('');
      setSecondNews('');
      setStockCurrentPrice('');
      setResetRecordState(false);

      setChecks({
        ...checks,
        code: false,
        category: false,
        currentPrice: false,
        diffPrice: false,
        isInterest: false,
        previousClose: false,
      });
    }
    return;
  }, [resetRecordState]);

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();

      let newsArr = [];

      if (!isEmpty(stockFirstNews)) {
        newsArr.push(stockFirstNews);
      }
      if (!isEmpty(stockSecondNews)) {
        newsArr.push(stockSecondNews);
      }
      let params;
      if (cmpToday(selectedDate)) {
        params = {
          date: selectedDate,
          code: stockCode,
          categoryName: stockCategory,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
        };
      } else {
        params = {
          date: selectedDate,
          code: stockCode,
          categoryName: stockCategory,
          currentPrice: stockCurrentPrice,
          previousClose: stockPreviousClose,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
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
        <Form autoComplete="off">
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
                    <GuideIcon>
                      <img src={info} width="13px" height="13px"></img>
                      <GuideText width="400px" left="160" top="-60">
                        오늘일자가 아닌경우 입력데이터가 추가로 필요합니다.
                        <br /> ,(구분자)는 제거됩니다.
                      </GuideText>
                    </GuideIcon>
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
                      setStockCurrentPrice((prev) => prev?.replaceAll(',', ''));
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
                <Label htmlFor="">
                  <StockInfo>
                    <span>전일종가</span>
                    <GuideIcon>
                      <img src={info} width="13px" height="13px"></img>
                      <GuideText width="200px" left="31">
                        ,(구분자)는 제거됩니다.
                      </GuideText>
                    </GuideIcon>
                  </StockInfo>
                  <Input
                    id="priceStatus"
                    type="text"
                    marginBottom="10px"
                    value={stockPreviousClose || ''}
                    onChange={onPreviousClose}
                    onBlur={() => {
                      if (!checks.previousClose) {
                        setChecks({ ...checks, previousClose: !checks.previousClose });
                      }
                      setPreviousClose((prev) => prev?.replaceAll(',', ''));
                    }}
                  ></Input>
                </Label>{' '}
                {checks.previousClose && !stockPreviousClose ? (
                  <Error>전일종가를 입력해주세요.</Error>
                ) : checks.previousClose && !numRegex.test(stockPreviousClose || '') ? (
                  <Error>숫자만 입력해주세요.</Error>
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

const GuideIcon = styled.div`
  margin-left: 5px;
  display: inline;
  position: relative;

  > div {
    position: absolute;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.5s;
    visibility: hidden;
  }

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

type GuideTextProps = {
  width?: string;
  top?: string;
  left?: string;
};

const GuideText = styled.div<GuideTextProps>`
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

GuideText.defaultProps = {
  top: '-40px',
};
export default StocksMemo;
