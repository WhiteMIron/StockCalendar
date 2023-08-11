import React, { SetStateAction, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { DiffAmount, DownPrice, Icon, PriceBox, SamePrice, Tbody, Td, Th, Tr, UpPrice } from './styles';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
import crown from '@images/crown.png';
import { isEmpty } from '@utils/common';
import uuid from 'react-uuid';
import styled from '@emotion/styled';
import Pagination from '@components/Pagination/Pagination';
import axios from 'axios';
interface StocksReadMemoProps {
  // selectedItem: Istock | null;
  // currentPage: number;
  // setCurrentPage: React.Dispatch<SetStateAction<number>>;
  selectedStockCode: string;
  // stockName: string;
  // stocks: Istock[];
  // totalCount: number;
  // setStocks: React.Dispatch<SetStateAction<Istock[]>>;
}

//여기서받게할까?

const StocksDetail = ({ selectedStockCode }: StocksReadMemoProps) => {
  let financeAddress = 'https://finance.naver.com/item/main.nhn?code=';
  const [currentPage, setCurrentPage] = useState(1);
  const [stocks, setStocks] = useState<Istock[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(1);
  const numPerPage = 5;
  useEffect(() => {
    axios
      .get('/api/specific-stock-all', { params: { code: selectedStockCode, offset: 0, numPerPage: 5 } })
      .then((response) => {
        const { stock, totalCount } = response.data;
        let stocksTmp = stock;

        setTotalCount(totalCount);
        stocksTmp.map((stock: Istock) => {
          if (!Array.isArray(stock.news)) {
            stock.news = JSON.parse(stock.news);
          }
          return stock;
        });
        setStocks(stocksTmp);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
    return;
  }, [selectedStockCode]);
  return (
    <Container>
      {isLoading ? (
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', height: '50px', justifyContent: 'center', alignItems: 'center' }}>
            <span>{stocks[(currentPage - 1) % numPerPage]?.register_date}</span>{' '}
          </div>

          <div
            style={{
              position: 'absolute',
              right: '50',
            }}
          >
            <Pagination
              stockCode={stocks[(currentPage - 1) % numPerPage]?.stock_code || ''}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalCount={totalCount}
              numPerPage={numPerPage}
              setStocks={setStocks}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              right: '5',
              top: 0,
            }}
          >
            ({currentPage}/{totalCount})
          </div>
        </div>
      ) : null}

      {isLoading ? (
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
                    <a href={financeAddress + stocks[(currentPage - 1) % numPerPage]?.stock_code} target="_blank">
                      <StockInfo>
                        {stocks[(currentPage - 1) % numPerPage]!!.isInterest ? (
                          <Icon>
                            <img src={crown} width="13px" height="13px" alt="관심종목"></img>
                          </Icon>
                        ) : (
                          <></>
                        )}
                        {stocks[(currentPage - 1) % numPerPage]!!.name}
                        {'('}
                        {stocks[(currentPage - 1) % numPerPage]!!.stock_code}
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
                {Number(stocks[(currentPage - 1) % numPerPage]!!.current_price) >
                Number(stocks[(currentPage - 1) % numPerPage]!!.previous_close) ? (
                  <PriceBox color="#f93345">
                    <UpPrice>
                      <strong>{Number(stocks[(currentPage - 1) % numPerPage]!!.current_price).toLocaleString()}</strong>
                    </UpPrice>
                    <DiffAmount>
                      {Number(stocks[(currentPage - 1) % numPerPage]?.diff_price).toLocaleString()} (
                      {stocks[(currentPage - 1) % numPerPage]!!.diff_percent})
                    </DiffAmount>
                  </PriceBox>
                ) : Number(stocks[(currentPage - 1) % numPerPage]!!.current_price) <
                  Number(stocks[(currentPage - 1) % numPerPage]!!.previous_close) ? (
                  <PriceBox color="#1e8df9">
                    <DownPrice>
                      <strong>{Number(stocks[(currentPage - 1) % numPerPage]!!.current_price).toLocaleString()}</strong>
                    </DownPrice>
                    <DiffAmount>
                      {Number(stocks[(currentPage - 1) % numPerPage]?.diff_price).toLocaleString()} (
                      {stocks[(currentPage - 1) % numPerPage]!!.diff_percent})
                    </DiffAmount>
                  </PriceBox>
                ) : (
                  <PriceBox color="#424242">
                    <SamePrice>
                      <strong>{Number(stocks[(currentPage - 1) % numPerPage]!!.current_price).toLocaleString()}</strong>
                    </SamePrice>
                    <DiffAmount>
                      {Number(stocks[(currentPage - 1) % numPerPage]?.diff_price).toLocaleString()} (
                      {stocks[(currentPage - 1) % numPerPage]!!.diff_percent})
                    </DiffAmount>
                  </PriceBox>
                )}
              </Td>
            </Tr>
            <Tr>
              <Th>카테고리</Th>
              <Td>{stocks[(currentPage - 1) % numPerPage]!!.Category.name}</Td>
            </Tr>
            {!isEmpty(stocks[(currentPage - 1) % numPerPage]!!.issue) ? (
              <Tr>
                <Th>이슈</Th>
                <Td>
                  {stocks[(currentPage - 1) % numPerPage]?.issue.split('\n').map((line) => {
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
            {!isEmpty(stocks[(currentPage - 1) % numPerPage]!!.news) ? (
              !isEmpty(stocks[(currentPage - 1) % numPerPage]!!.news[0]) ? (
                <Tr>
                  <Th rowSpan={2}>뉴스</Th>
                  <Td>
                    <a href={stocks[(currentPage - 1) % numPerPage]!!.news[0]} target="_blank">
                      {stocks[(currentPage - 1) % numPerPage]!!.news[0]}
                    </a>
                  </Td>
                </Tr>
              ) : null
            ) : null}
            {!isEmpty(stocks[(currentPage - 1) % numPerPage]!!.news) ? (
              !isEmpty(stocks[(currentPage - 1) % numPerPage]!!.news[1]) ? (
                <Tr>
                  {!isEmpty(stocks[(currentPage - 1) % numPerPage]!!.news[0]) ? null : <Th rowSpan={2}>뉴스</Th>}
                  <Td>
                    <a href={stocks[(currentPage - 1) % numPerPage]!!.news[1]} target="_blank">
                      {stocks[(currentPage - 1) % numPerPage]!!.news[1]}
                    </a>
                  </Td>
                </Tr>
              ) : null
            ) : null}
          </Tbody>
        </Table>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  width: 70%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
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
const Table = styled.table`
  width: 100%;
  /* height: 100%; */
  border-spacing: 0px;
  border-collapse: collapse;
  font-size: 15px;
  word-break: break-all;
  border-style: hidden;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0 0 0 1px #dadada;
  flex-grow: 1;
`;
export default StocksDetail;
