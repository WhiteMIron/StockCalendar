import React, { useEffect, useState } from 'react';

import { Button, DownButton, Input, Label, UpButton, MemoContainer, BtnGroup } from './styles';
import { ChangeInfoGroup, Content, NewsGroup, StockNameGroup, StockPriceGroup } from '@pages/StockRecord/styles';
import ModalPortal from '@components/Modal/ModalPotal';
import Modal from '@components/Modal/Modal';
import { CSSTransition } from 'react-transition-group';

interface itemProps {
  selectedItem: { id: string; title: string; desc: string; reason: string };
}

const StocksMemo = ({ selectedItem }: itemProps) => {
  const [stockState, onStockState] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MemoContainer>
      <form style={{ padding: '10px' }}>
        <StockNameGroup>
          <Label>
            <span>종목명</span>
            <Input marginBottom="10px" value=""></Input>
          </Label>
        </StockNameGroup>
        <StockPriceGroup>
          <Label>
            종가
            <Input marginBottom="10px" value=""></Input>
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

            <Input id="rate" marginBottom="10px"></Input>
          </Content>{' '}
        </ChangeInfoGroup>
        <Label>
          <span>이슈</span>
          <textarea
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
            <Input marginBottom="10px" value={selectedItem.title}></Input>
            <Input marginBottom="10px" value={selectedItem.title}></Input>
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
      {/* <ModalPortal>
        <Modal visible={modalOpen} title={'입력한 내용으로 저장하시겠습니까?'} onClose={handleModal}>
          <BtnGroup justifyContent="flex-end">
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
          </BtnGroup>
        </Modal>
      </ModalPortal> */}
    </MemoContainer>
  );
};

export default StocksMemo;
