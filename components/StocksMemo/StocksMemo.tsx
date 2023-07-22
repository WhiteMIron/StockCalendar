import React, { SetStateAction, useCallback, useEffect, useState } from 'react';

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
}

interface itemProps {
  stocks: Istock[];
  selectedItem: Istock | undefined;
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
}

const StocksMemo = ({ stocks, setStocks, setIsRecord, selectedItem }: itemProps) => {
  const [stockState, onStockState] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [stockCode, setStockCode] = useInput('');

  const [stockCategory, setCategory] = useInput('');
  const [stockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, setSecondNews] = useInput('');
  const [stockThirdNews, setThirdNews] = useInput('');
  const [stockNews, setStockNews] = useState([]);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = useCallback(
    (e) => {
      setModalOpen(false);
      e.preventDefault();
      console.log(stockCode);
      axios
        .post('/api/test', { code: stockCode, categoryName: stockCategory })
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
            <Input type="email" marginBottom="10px" value={stockCode} onChange={setStockCode}></Input>
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
            <span>전일대비</span>
          </Content>
          <Content>
            {stockState === 'up' ? (
              <UpButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState('up');
                }}
              >
                상승
              </UpButton>
            ) : (
              <UpButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState('up');
                }}
                opacity="0.5"
              >
                상승
              </UpButton>
            )}

            {stockState == 'down' ? (
              <DownButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState('down');
                }}
              >
                하락
              </DownButton>
            ) : (
              <DownButton
                type="button"
                marginRight="10px"
                onClick={() => {
                  onStockState('down');
                }}
                opacity="0.5"
              >
                하락
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
              setIsRecord(false);
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
