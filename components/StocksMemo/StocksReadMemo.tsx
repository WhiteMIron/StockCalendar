import { css } from '@emotion/react';
import {
  BtnGroup,
  Button,
  DiffAmount,
  DownPrice,
  Icon,
  PriceBox,
  ReadMemoContainer,
  SamePrice,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  UpPrice,
} from './styles';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
import crown from '@images/crown.png';
import { isEmpty } from '@utils/common';
import styled from '@emotion/styled';
import ModalPortal from '@components/Modal/ModalPotal';
import { CSSTransition } from 'react-transition-group';
import BackDrop from '@components/Modal/BackDrop';
import Modal from '@components/Modal/Modal';
import axios from 'axios';
import uuid from 'react-uuid';
import { Viewer } from '@toast-ui/react-editor';
interface StocksReadMemoProps {
  stocks: Istock[];
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
  setIsSelectedItem: React.Dispatch<SetStateAction<Istock | null>>;
  selectedItem: Istock | null;
  canEdit: boolean;
}

const StocksReadMemo = ({
  stocks,
  setStocks,
  setIsRecord,
  setIsSelected,
  setIsEditRecord,
  setIsSelectedItem,
  selectedItem,
  canEdit,
}: StocksReadMemoProps) => {
  let financeAddress = 'https://finance.naver.com/item/main.nhn?code=';

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = () => {
    setModalOpen(false);
    axios
      .delete(`/api/stock/${selectedItem?.id}`)
      .then((response) => {
        setStocks(stocks.filter((stock) => stock.id !== selectedItem?.id));
        alert('삭제되었습니다.');

        setIsEditRecord(false);
        setIsSelected(false);
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response);
      })
      .finally(() => {});
  };

  return (
    <ReadMemoContainer>
      <Table>
        <colgroup>
          <col
            css={css`
              width: 30%;
            `}
          ></col>
          <col
            css={css`
              width: 70%;
            `}
          ></col>
        </colgroup>
        <Tbody>
          <Tr>
            <Th>종목명(종목코드)</Th>
            <Td>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <a href={financeAddress + selectedItem?.stock_code} target="_blank">
                    <StockInfo>
                      {selectedItem!!.name}
                      {'('}
                      {selectedItem!!.stock_code}
                      {')'}
                      <Icon>
                        <img src={link} width="13px" height="13px"></img>
                        <span>네이버증권으로 이동합니다.</span>
                      </Icon>
                    </StockInfo>
                  </a>{' '}
                </div>

                {canEdit ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexShrink: 0,
                    }}
                  >
                    <Button
                      marginRight="5px"
                      bgColor="#00BB9D"
                      padding="0 10px"
                      onClick={() => {
                        setIsSelected(false);
                        setIsRecord(false);
                        setIsEditRecord(true);
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      bgColor="#8e8e8e"
                      padding="0 10px"
                      onClick={() => {
                        handleModal();
                      }}
                    >
                      삭제
                    </Button>
                  </div>
                ) : null}
              </div>
            </Td>
          </Tr>
          <Tr>
            <Th>종가</Th>
            <Td>
              {Number(selectedItem!!.current_price) > Number(selectedItem!!.previous_close) ? (
                <PriceBox color="#f93345">
                  <UpPrice>
                    <strong>{Number(selectedItem!!.current_price).toLocaleString()}</strong>
                  </UpPrice>
                  <DiffAmount>
                    {Number(selectedItem?.diff_price).toLocaleString()} ({selectedItem!!.diff_percent})
                  </DiffAmount>
                </PriceBox>
              ) : Number(selectedItem!!.current_price) < Number(selectedItem!!.previous_close) ? (
                <PriceBox color="#1e8df9">
                  <DownPrice>
                    <strong>{Number(selectedItem!!.current_price).toLocaleString()}</strong>
                  </DownPrice>
                  <DiffAmount>
                    {Number(selectedItem?.diff_price).toLocaleString()} ({selectedItem!!.diff_percent})
                  </DiffAmount>
                </PriceBox>
              ) : (
                <PriceBox color="#424242">
                  <SamePrice>
                    <strong>{Number(selectedItem!!.current_price).toLocaleString()}</strong>
                  </SamePrice>
                  <DiffAmount>
                    {Number(selectedItem?.diff_price).toLocaleString()} ({selectedItem!!.diff_percent})
                  </DiffAmount>
                </PriceBox>
              )}
            </Td>
          </Tr>
          <Tr>
            <Th>카테고리</Th>
            <Td>{selectedItem!!.category_name}</Td>
          </Tr>
          {!isEmpty(selectedItem!!.issue) ? (
            <Tr>
              <Th>이슈</Th>
              <Td>
                <Viewer initialValue={selectedItem!!.issue}></Viewer>
              </Td>
            </Tr>
          ) : null}
          {!isEmpty(selectedItem!!.news) ? (
            !isEmpty(selectedItem!!.news[0]) ? (
              <Tr>
                <Th rowSpan={2}>뉴스</Th>
                <Td>
                  <a href={selectedItem!!.news[0]} target="_blank">
                    {selectedItem!!.news[0]}
                  </a>
                </Td>
              </Tr>
            ) : null
          ) : null}
          {!isEmpty(selectedItem!!.news) ? (
            !isEmpty(selectedItem!!.news[1]) ? (
              <Tr>
                {!isEmpty(selectedItem!!.news[0]) ? null : <Th rowSpan={2}>뉴스</Th>}
                <Td>
                  <a href={selectedItem!!.news[1]} target="_blank">
                    {selectedItem!!.news[1]}
                  </a>
                </Td>
              </Tr>
            ) : null
          ) : null}
        </Tbody>
      </Table>

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
          <Modal title={'삭제하시겠습니까?'}>
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
                  onSubmit();
                  setModalOpen(false);
                }}
                bgColor="#00BB9D"
              >
                삭제
              </Button>
            </BtnGroup>
          </Modal>
        </CSSTransition>
      </ModalPortal>
    </ReadMemoContainer>
  );
};

const TextBox = styled.div`
  word-break: break-all;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    display: block;
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
  }
`;
export default StocksReadMemo;
