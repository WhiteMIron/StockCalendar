import { css } from '@emotion/react';
import { Button, DownAmount, DownPrice, Icon, MemoContainer, StockInfo, Table, Tbody, Td, Th, Tr } from './styles';
import React, { SetStateAction } from 'react';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
import { isEmpty } from '@utils/common';
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
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexShrink: 0,
                    }}
                  >
                    <Button
                      marginRight="5px"
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
            {selectedItem!!.issue ? (
              <Tr>
                <Th>이슈</Th>
                <Td>
                  <p>{selectedItem?.issue} </p>
                </Td>
              </Tr>
            ) : null}

            {!isEmpty(selectedItem!!.news) ? (
              <>
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
              </>
            ) : null}
          </Tbody>
        </Table>
      </div>
    </MemoContainer>
  );
};

export default StocksReadMemo;
