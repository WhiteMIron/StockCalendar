import React, { SetStateAction, useCallback, useEffect, useState, ChangeEvent } from 'react';

import {
  Button,
  DownButton,
  Input,
  Label,
  UpButton,
  MemoContainer,
  BtnGroup,
  Form,
  StockInfo,
  TextArea,
  Error,
} from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockInfoGroup, StockPriceGroup } from '@pages/StockRecord/styles';
import ModalPortal from '@components/Modal/ModalPotal';
import Modal from '@components/Modal/Modal';
import { CSSTransition } from 'react-transition-group';
import useInput from '@hooks/useInput';
import BackDrop from '@components/Modal/BackDrop';
import axios from 'axios';
import { Istock } from '@typings/stock';
import moment from 'moment';
import info from '@images/info.png';
import styled from '@emotion/styled';
import { cmpToday } from '@utils/common';
interface itemProps {
  stocks: Istock[];
  selectedItem: Istock | null;
  selectedDate: string;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
  setIsSelectedItem: React.Dispatch<SetStateAction<Istock | null>>;
  isEditRecord: boolean;
}

interface ObjType {
  [key: string]: boolean;
}

const StocksEditMemo = ({
  stocks,
  setStocks,
  setIsRecord,
  selectedItem,
  selectedDate,
  isEditRecord,
  setIsEditRecord,
  setIsSelected,
  setIsSelectedItem,
}: itemProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isInterest, setIsInterest] = useState(Boolean(selectedItem?.isInterest));
  const [stockName] = useInput(selectedItem?.name);
  const [stockCode] = useInput(selectedItem?.stock_code);
  const [stockCategory, onChangeCategory, setStockCategory] = useInput(selectedItem?.Category.name);
  const [stockCurrentPrice, onChangeStockCurrentPrice, setStockCurrentPrice] = useInput(selectedItem?.current_price);
  const [stockPreviousClose, onChangePreviousClose, setStockPreviousClose] = useInput(selectedItem?.previous_close);

  const [stockIssue, onChangeStockIssue] = useInput(selectedItem?.issue);
  const [stockFirstNews, onChangeFirstNews] = useInput(selectedItem!!.news[0]);
  const [stockSecondNews, onChangeSecondNews] = useInput(selectedItem!!.news[1]);

  const numRegex = /^[0-9]+$/;
  const [checks, setChecks] = useState<ObjType>({
    category: false,
    currentPrice: false,
    previousClose: false,
  });

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();

      let params;
      let newsArr = [];
      newsArr.push(stockFirstNews);
      newsArr.push(stockSecondNews);

      if (cmpToday(selectedDate)) {
        params = {
          id: selectedItem?.id,
          categoryName: stockCategory,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
          date: selectedDate,
          stockCode: stockCode,
        };
      } else {
        params = {
          id: selectedItem?.id,
          categoryName: stockCategory,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
          currentPrice: stockCurrentPrice,
          previousClose: stockPreviousClose,
          date: selectedDate,
          stockCode: stockCode,
        };
      }

      axios
        .put('/api/stock', params)
        .then((response) => {
          setStocks(
            stocks.map((stock) => {
              if (stock.id === response.data.id) {
                if (!Array.isArray(response.data.news)) {
                  response.data.news = JSON.parse(response.data.news);
                }
                return {
                  ...stock,
                  ...response.data,
                };
              } else return stock;
            }),
          );
          setIsSelectedItem(response.data);
          setIsEditRecord(false);
          setIsSelected(true);
        })
        .catch((error) => {
          alert(error.response.data);
          console.log(error.response);
        })
        .finally(() => {});
    },
    [
      stockCode,
      stockCategory,
      stockFirstNews,
      stockSecondNews,
      isInterest,
      stockIssue,
      stockCurrentPrice,
      stockPreviousClose,
    ],
  );

  return (
    <MemoContainer>
      <FormContainer>
        <Form>
          {cmpToday(selectedDate) ? (
            <>
              <StockInfoGroup>
                <StockInfo>종목명</StockInfo>
                <div style={{ marginBottom: '10px', padding: '5px' }}>{stockName}</div>
              </StockInfoGroup>

              <StockInfoGroup>
                <Label>
                  <StockInfo>종목코드</StockInfo>
                  <div style={{ marginBottom: '10px', padding: '5px' }}>{stockCode}</div>
                </Label>
              </StockInfoGroup>
            </>
          ) : (
            <>
              <StockInfoGroup>
                <StockInfo>종목명</StockInfo>
                <div style={{ marginBottom: '10px', padding: '5px' }}>{stockName}</div>
              </StockInfoGroup>

              <StockInfoGroup>
                <Label>
                  <StockInfo>종목코드</StockInfo>
                  <div style={{ marginBottom: '10px', padding: '5px' }}>{stockCode}</div>
                </Label>
              </StockInfoGroup>
              <StockInfoGroup>
                <Label>
                  <StockInfo>
                    종가
                    <GuideIcon>
                      <img src={info} width="13px" height="13px"></img>
                      <GuideText width="400px" left="160" top="-60">
                        오늘일자가 아닌경우 종가, 전일종가 <br />
                        데이터가 추가로 필요합니다.
                      </GuideText>
                    </GuideIcon>
                  </StockInfo>
                  <Input
                    type="text"
                    marginBottom="10px"
                    value={stockCurrentPrice}
                    onChange={onChangeStockCurrentPrice}
                    onBlur={() => {
                      if (!checks.currentPrice) {
                        setChecks({ ...checks, currentPrice: !checks.currentPrice });
                      }
                      setStockCurrentPrice((prev) => prev?.replaceAll(',', ''));
                      setStockCurrentPrice((prev) => prev?.replaceAll(' ', ''));
                    }}
                  ></Input>
                </Label>
                {checks.currentPrice && !stockCurrentPrice ? (
                  <Error>종가를 입력해주세요.</Error>
                ) : checks.currentPrice && !numRegex.test(stockCurrentPrice || '') ? (
                  <Error>숫자만 입력해주세요.</Error>
                ) : (
                  <></>
                )}{' '}
              </StockInfoGroup>
              <StockInfoGroup>
                <Label>
                  <StockInfo>
                    <span>전일종가 </span>
                  </StockInfo>
                  <Input
                    type="text"
                    marginBottom="10px"
                    value={stockPreviousClose}
                    onChange={onChangePreviousClose}
                    onBlur={() => {
                      if (!checks.currentPrice) {
                        setChecks({ ...checks, previousClose: !checks.previousClose });
                      }
                      setStockPreviousClose((prev) => prev?.replaceAll(',', ''));
                      setStockPreviousClose((prev) => prev?.replaceAll(' ', ''));
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
                <span>카테고리</span>
              </StockInfo>
              <Input
                marginBottom="10px"
                value={stockCategory}
                onChange={onChangeCategory}
                onBlur={() => {
                  if (!checks.category) {
                    setChecks({ ...checks, category: !checks.category });
                  }
                  setStockCategory((prev) => prev?.replaceAll(',', ''));
                  setStockCategory((prev) => prev?.replaceAll(' ', ''));
                }}
              ></Input>
            </Label>{' '}
            {checks.category && !stockCategory ? <Error>카테고리를 입력해주세요.</Error> : <></>}{' '}
          </StockInfoGroup>
          <ChangeInfoGroup>
            <Content>
              <span>관심종목</span>
            </Content>
            <Content>
              {isInterest === true ? (
                <UpButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(() => true);
                  }}
                >
                  예
                </UpButton>
              ) : (
                <UpButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(() => true);
                  }}
                  opacity="0.5"
                >
                  예
                </UpButton>
              )}

              {isInterest == false ? (
                <DownButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(false);
                  }}
                >
                  아니오
                </DownButton>
              ) : (
                <DownButton
                  type="button"
                  marginRight="10px"
                  onClick={() => {
                    setIsInterest(false);
                  }}
                  opacity="0.5"
                >
                  아니오
                </DownButton>
              )}
            </Content>
          </ChangeInfoGroup>
          <Label>
            <StockInfo>
              <span>이슈</span>
            </StockInfo>
            <TextArea
              value={stockIssue}
              onChange={onChangeStockIssue}
              style={{
                wordBreak: 'keep-all',
                textAlign: 'justify',
                height: '360px',
              }}
            ></TextArea>
          </Label>
          <NewsGroup>
            <Label>
              <StockInfo>
                <span>뉴스</span>
              </StockInfo>
              <Input marginBottom="10px" value={stockFirstNews || ''} onChange={onChangeFirstNews}></Input>
              <Input marginBottom="10px" value={stockSecondNews || ''} onChange={onChangeSecondNews}></Input>
            </Label>
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
            handleModal();
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

const DataInfo = styled.div``;
export default StocksEditMemo;
