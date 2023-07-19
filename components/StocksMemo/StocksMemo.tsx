import React, { useEffect, useState } from 'react';

import { Button, DownButton, Input, Label, UpButton, MemoContainer, BtnGroup } from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockNameGroup, StockPriceGroup } from '@pages/StockRecord/styles';
import ModalPortal from '@components/Modal/ModalPotal';
import Modal from '@components/Modal/Modal';
import { CSSTransition } from 'react-transition-group';
import useInput from '@hooks/useInput';

interface itemProps {
  selectedItem: { id: string; title: string; desc: string; reason: string };
}

const StocksMemo = ({ selectedItem }: itemProps) => {
  const [stockState, onStockState] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [stockName, setStockName] = useInput('');
  const [stockPrice, setStockPrice] = useInput('');
  const [stockChangePercent, setStockChangePercent] = useInput('');
  const [stockIssue, setStockIssue] = useInput('');
  const [stockFirstNews, setFirstNews] = useInput('');
  const [stockSecondNews, setSecondNews] = useInput('');
  const [stockThirdNews, setThirdNews] = useInput('');
  const [stockFourthNews, setFourthNews] = useInput('');
  const [stockNews, setStockNews] = useState([]);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MemoContainer>
      <form style={{ padding: '10px' }}>
        <StockNameGroup>
          <Label>
            <span>종목명</span>
            <Input marginBottom="10px" value={stockName} onChange={setStockName}></Input>
          </Label>
        </StockNameGroup>
        <StockPriceGroup>
          <Label>
            종가
            <Input marginBottom="10px" value={stockPrice} onChange={setStockPrice}></Input>
          </Label>
        </StockPriceGroup>

        <ChangeInfoGroup>
          <Content>
            <span>변동률</span>
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

            <Input id="rate" marginBottom="10px" value={stockChangePercent} onChange={setStockChangePercent}></Input>
          </Content>{' '}
        </ChangeInfoGroup>
        <Label>
          <span>이슈</span>
          <textarea
            value={stockIssue}
            onChange={setStockIssue}
            style={{
              width: '100%',
              height: '200px',
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
            <Input marginBottom="10px" value={stockFourthNews} onChange={setFourthNews}></Input>
          </Label>
        </NewsGroup>
        <BtnGroup>
          <Button type="button" width="100%" bgColor="#fff" color="#00BB9D" marginRight="10px" isBorder={true}>
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
      </form>
      <ModalPortal show={modalOpen} onClose={handleModal}>
        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={{ enter: 700, exit: 700 }} classNames="modal">
          <Modal title={'입력한 내용으로 저장하시겠습니까?'}>
            {/* <BtnGroup justifyContent="flex-end">
              <Button
                type="button"
                width="25%"
                onClick={handleModal}
                bgColor="#fff"
                color="#00BB9D"
                marginRight="10px"
                isBorder={true}
              >
                취소
              </Button>

              <Button type="button" width="25%" onClick={handleModal} color="#fff" bgColor="#00BB9D">
                저장
              </Button>
            </BtnGroup> */}
          </Modal>
        </CSSTransition>
      </ModalPortal>
    </MemoContainer>
  );
};

export default StocksMemo;
