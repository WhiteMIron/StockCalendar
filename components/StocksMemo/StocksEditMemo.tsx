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
} from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockNameGroup, StockPriceGroup } from '@pages/StockRecord/styles';
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
  const [isInterest, setIsInterest] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [stockName, setStockName] = useInput(selectedItem?.name);
  const [stockCode, onStockCode] = useInput(selectedItem?.stock_code);
  const [stockCategory, setCategory] = useInput(selectedItem?.Category.name);
  const [stockCurrentPrice, setStockCurrentPrice] = useInput(selectedItem?.current_price);
  const [stockDaysRange, setStockDaysRange] = useInput(selectedItem?.days_range);
  const [stockDiffPrice, setDiffPrice] = useInput(selectedItem?.diff_price);
  const [stockIssue, setStockIssue] = useInput(selectedItem?.issue);
  const [stockFirstNews, setFirstNews] = useInput(selectedItem!!.news[0]);
  const [stockSecondNews, setSecondNews] = useInput(selectedItem!!.news[1]);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();

      let newsArr = [];
      newsArr.push(stockFirstNews);
      newsArr.push(stockSecondNews);

      axios
        .put('/api/stock', {
          id: selectedItem?.id,
          categoryName: stockCategory,
          news: JSON.stringify(newsArr),
          isInterest: isInterest,
          issue: stockIssue,
        })
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
    [stockCode, stockCategory, stockFirstNews, stockSecondNews, isInterest, stockIssue],
  );

  return (
    <MemoContainer>
      <FormContainer>
        <Form>
          {cmpToday(selectedDate) ? (
            <StockNameGroup>
              {/* <Label> */}
              <StockInfo>종목코드</StockInfo>
              <Input
                type="email"
                marginBottom="10px"
                value={stockCode}
                onChange={onStockCode}
                onBlur={() => {}}
              ></Input>
              {/* </Label> */}
            </StockNameGroup>
          ) : (
            <>
              <StockNameGroup>
                <StockInfo>
                  <span>종목명</span>
                </StockInfo>
                <div style={{ marginBottom: '10px' }}>{stockName}</div>

                {/* <Label>
                  <span>종목명</span>
                  <Input type="email" marginBottom="10px" value={stockName} onChange={setStockName}></Input>
                </Label> */}
              </StockNameGroup>

              <StockNameGroup>
                <Label>
                  <StockInfo>
                    종목코드
                    <Icon>
                      <img src={info} width="13px" height="13px"></img>
                      <span>오늘일자가 아닌경우 입력데이터가 추가로 필요합니다.</span>
                    </Icon>
                  </StockInfo>
                  {/* <Input
                    type="email"
                    marginBottom="10px"
                    value={stockCode}
                    onChange={onStockCode}
                    onBlur={() => {}}
                  ></Input> */}
                  <div style={{ marginBottom: '10px' }}>{stockCode}</div>
                </Label>
              </StockNameGroup>
              <StockNameGroup>
                <Label>
                  <span>종가</span>
                  <Input
                    type="email"
                    marginBottom="10px"
                    value={stockCurrentPrice}
                    onChange={setStockCurrentPrice}
                    onBlur={() => {}}
                  ></Input>
                </Label>
              </StockNameGroup>
              <StockNameGroup>
                <Label>
                  <span>전일대비 (ex: 8,500) </span>
                  <Input
                    type="email"
                    marginBottom="10px"
                    value={stockDiffPrice}
                    onChange={setDiffPrice}
                    onBlur={() => {}}
                  ></Input>
                </Label>
              </StockNameGroup>
              <StockNameGroup>
                <Label>
                  <span>등락률 (ex: +3.18%, -3.18%) </span>
                  <Input
                    type="email"
                    marginBottom="10px"
                    value={stockDaysRange}
                    onChange={setStockDaysRange}
                    onBlur={() => {}}
                  ></Input>
                </Label>
              </StockNameGroup>
            </>
          )}

          <StockPriceGroup>
            <Label>
              카테고리
              <Input marginBottom="10px" value={stockCategory} onChange={setCategory}></Input>
            </Label>
          </StockPriceGroup>
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
            <span>이슈</span>
            <TextArea
              value={stockIssue}
              onChange={setStockIssue}
              style={{
                wordBreak: 'keep-all',
                textAlign: 'justify',
                height: '360px',
              }}
            ></TextArea>
          </Label>
          <NewsGroup>
            <Label>
              <span>뉴스</span>
              <Input marginBottom="10px" value={stockFirstNews} onChange={setFirstNews}></Input>
              <Input marginBottom="10px" value={stockSecondNews} onChange={setSecondNews}></Input>
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
export default StocksEditMemo;
