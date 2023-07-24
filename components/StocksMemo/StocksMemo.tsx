import React, { SetStateAction, useCallback, useEffect, useState, ChangeEvent } from 'react';

import { Button, DownButton, Input, Label, UpButton, MemoContainer, BtnGroup, Form } from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockNameGroup, StockPriceGroup } from '@pages/StockRecord/styles';
import ModalPortal from '@components/Modal/ModalPotal';
import Modal from '@components/Modal/Modal';
import { CSSTransition } from 'react-transition-group';
import useInput from '@hooks/useInput';
import BackDrop from '@components/Modal/BackDrop';
import axios from 'axios';

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
  stockCode: string;
}

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

const StocksMemo = ({
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
  // const [stockCode, setStockCode] = useInput('');
  const [stockCode, setStockCode] = useState(selectedItem?.stockCode);
  const [stockCategory, setCategory] = useInput('');
  const [stockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, setSecondNews] = useInput('');
  const [stockThirdNews, setThirdNews] = useInput('');
  const [stockNews, setStockNews] = useState([]);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  const onStockCode = (e: ChangeEvent<HTMLInputElement>) => {
    setStockCode(e.target.value);
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
        <StockNameGroup>
          <Label>
            <span>종목코드</span>
            <Input
              type="email"
              marginBottom="10px"
              value={stockCode}
              onChange={onStockCode}
              onBlur={() => {
                //여기다 관심종목 여부 조회해서 반영시키면 될듯?
              }}
            ></Input>
          </Label>
        </StockNameGroup>

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
            <Input marginBottom="10px" value={stockThirdNews} onChange={setThirdNews}></Input>
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

export default StocksMemo;
