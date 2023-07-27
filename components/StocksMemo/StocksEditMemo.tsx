import React, { SetStateAction, useCallback, useEffect, useState, ChangeEvent } from 'react';

import { Button, DownButton, Input, Label, UpButton, MemoContainer, BtnGroup, Form, Icon, StockInfo } from './styles';
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
interface itemProps {
  stocks: Istock[];
  selectedItem: Istock | null;
  selectedDate: string;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
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
}: itemProps) => {
  const [stockState, onStockState] = useState<boolean | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [stockName, setStockName] = useInput(selectedItem?.name);
  const [stockCode, onStockCode] = useInput(selectedItem?.stock_code);
  const [stockCategory, setCategory] = useInput(selectedItem?.Category.name);
  const [stockCurrentPrice, setStockCurrentPrice] = useInput(selectedItem?.current_price);
  const [stockDaysRange, setStockDaysRange] = useInput(selectedItem?.days_range);
  const [stockDiffPrice, setDiffPrice] = useInput(selectedItem?.diff_price);
  const [stockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, setSecondNews] = useInput('');
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const cmpToday = (date: string) => {
    let result = moment(moment().format('YYYY-MM-DD')).isSame(moment(date.replaceAll('/', '-')));
    return result;
  };

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();
      axios
        .post('/api/stock', {
          code: stockCode,
          categoryName: stockCategory,
          date: selectedDate,
          // isInterest: stockState,
        })
        .then((response) => {
          setIsRecord(false);
          setStocks([...stocks, response.data]);
        })
        .catch((error) => {
          alert(error.response.data);
          console.log(error.response);
        })
        .finally(() => {});
    },
    [stockCode, stockCategory],
  );

  return (
    <MemoContainer>
      <Form>
        {cmpToday(selectedDate) ? (
          <StockNameGroup>
            <Label>
              <StockInfo>종목코드</StockInfo>
              <Input
                type="email"
                marginBottom="10px"
                value={stockCode}
                onChange={onStockCode}
                onBlur={() => {}}
              ></Input>
            </Label>
          </StockNameGroup>
        ) : (
          <>
            <StockNameGroup>
              <Label>
                <StockInfo>
                  종목코드
                  <Icon>
                    <img src={info} width="13px" height="13px"></img>
                  </Icon>
                  <span>오늘일자가 아닌경우 입력데이터가 추가로 필요합니다.</span>
                </StockInfo>
                <Input
                  type="email"
                  marginBottom="10px"
                  value={stockCode}
                  onChange={onStockCode}
                  onBlur={() => {}}
                ></Input>
              </Label>
            </StockNameGroup>
            <StockNameGroup>
              <Label>
                <span>종목명</span>
                <Input type="email" marginBottom="10px" value={stockName} onChange={setStockName}></Input>
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
            {stockState === true ? (
              <UpButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState(true);
                }}
              >
                예
              </UpButton>
            ) : (
              <UpButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState(true);
                }}
                opacity="0.5"
              >
                예
              </UpButton>
            )}

            {stockState == false ? (
              <DownButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState(false);
                }}
              >
                아니오
              </DownButton>
            ) : (
              <DownButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState(false);
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
          <textarea
            value={stockIssue}
            onChange={setStockIssue}
            style={{
              width: '100%',
              height: '300px',
              border: '1px solid #dadada',
              resize: 'none',
              marginBottom: '10px',
            }}
          ></textarea>
        </Label>
        <NewsGroup>
          <Label>
            <span>뉴스</span>
            <Input marginBottom="10px" value={stockFirstNews} onChange={setFirstNews}></Input>
            <Input marginBottom="10px" value={stockSecondNews} onChange={setSecondNews}></Input>
          </Label>
        </NewsGroup>
        <BtnGroup>
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

          <CSSTransition
            in={modalOpen}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 300, exit: 100 }}
            classNames="modal"
          >
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
      </Form>
    </MemoContainer>
  );
};

export default StocksEditMemo;
