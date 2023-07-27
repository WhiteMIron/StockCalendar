import { css } from '@emotion/react';
import {
  Button,
  DownAmount,
  DownButton,
  DownPrice,
  Icon,
  MemoContainer,
  StockInfo,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from './styles';
import React, { SetStateAction, useEffect } from 'react';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
interface StocksReadMemoProps {
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
  selectedItem: Istock | null;
}

const StocksReadMemo = ({ setIsRecord, setIsSelected, setIsEditRecord, selectedItem }: StocksReadMemoProps) => {
  let financeAddress = 'https://finance.naver.com/item/main.nhn?code=';

  return (
    <MemoContainer>
      <div>
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
              <Th>종목명</Th>
              <Td>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                  }}
                >
                  <a href={financeAddress + selectedItem?.stock_code} target="_blank">
                    <StockInfo>
                      {selectedItem!!.name}
                      <Icon>
                        <img src={link} width="13px" height="13px"></img>
                      </Icon>
                      <span>네이버증권으로 이동합니다.</span>
                    </StockInfo>
                  </a>{' '}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      position: 'absolute',
                      right: '10',
                    }}
                  >
                    <Button
                      marginRight="10px"
                      bgColor="#76baff"
                      padding="0 10px"
                      onClick={() => {
                        setIsSelected(false);
                        setIsRecord(false);
                        setIsEditRecord(true);
                      }}
                    >
                      수정
                    </Button>
                    <Button bgColor="#8e8e8e" padding="0 10px">
                      {' '}
                      삭제
                    </Button>
                  </div>
                </div>
              </Td>
            </Tr>
            <Tr>
              <Th>종목코드</Th>
              <Td>{selectedItem!!.stock_code}</Td>
            </Tr>
            <Tr>
              <Th>카테고리</Th>
              <Td>{selectedItem!!.Category.name}</Td>
            </Tr>

            <Tr>
              <Th>종가</Th>
              <Td>
                <DownPrice>
                  <strong>{selectedItem!!.current_price}</strong>
                </DownPrice>
                <DownAmount>
                  {selectedItem?.diff_price} ({selectedItem!!.days_range})
                </DownAmount>
              </Td>
            </Tr>

            <Tr>
              <Th>이슈</Th>
              <Td>
                <p>{selectedItem?.issue} </p>
              </Td>
            </Tr>
            <Tr>
              <Th rowSpan={2}>뉴스</Th>
              <Td>
                <a href={selectedItem!!.news[0]} target="_blank">
                  {selectedItem!!.news[0]}
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <a href={selectedItem!!.news[1]} target="_blank">
                  {selectedItem!!.news[1]}
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </MemoContainer>
  );
};

export default StocksReadMemo;
