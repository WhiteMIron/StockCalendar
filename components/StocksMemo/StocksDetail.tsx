import React, { SetStateAction, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { DiffAmount, DownPrice, Icon, PriceBox, SamePrice, Table, Tbody, Td, Th, Tr, UpPrice } from './styles';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
import crown from '@images/crown.png';
import { isEmpty } from '@utils/common';
import uuid from 'react-uuid';
import styled from '@emotion/styled';
import axios from 'axios';
interface StocksReadMemoProps {
  selectedItem: Istock | null;
}

const StocksDetail = ({ selectedItem }: StocksReadMemoProps) => {
  let financeAddress = 'https://finance.naver.com/item/main.nhn?code=';

  useEffect(() => {
    console.log(selectedItem);
  }, []);

  return (
    <Container>
      <div>날짜</div>
      {/* <Table>
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
                      {selectedItem!!.isInterest ? (
                        <Icon>
                          <img src={crown} width="13px" height="13px" alt="관심종목"></img>
                        </Icon>
                      ) : (
                        <></>
                      )}
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
            <Td>{selectedItem!!.Category.name}</Td>
          </Tr>
          {!isEmpty(selectedItem!!.issue) ? (
            <Tr>
              <Th>이슈</Th>
              <Td>
                {selectedItem?.issue.split('\n').map((line) => {
                  return (
                    <span key={uuid()}>
                      {line}
                      <br />
                    </span>
                  );
                })}
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
      </Table> */}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  width: 60%;
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
export default StocksDetail;
