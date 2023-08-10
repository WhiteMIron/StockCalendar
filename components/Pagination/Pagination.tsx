import styled from '@emotion/styled';
import React, { SetStateAction, useState } from 'react';
import prev from '@images/page_prev.png';
import prevHover from '@images/page_prevhover.png';
import next from '@images/page_next.png';
import nextHover from '@images/page_nexthover.png';
import { Istock } from '@typings/stock';
import axios from 'axios';

interface IpaginationProps {
  totalCount: number;
  countControl: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  setStocks: React.Dispatch<SetStateAction<Istock[]>>;
  stockCode: string;
}

const Pagination = ({
  stockCode,
  totalCount,
  countControl,
  currentPage,
  setCurrentPage,
  setStocks,
}: IpaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const calculateOffset = (currentPage: number, countControl: number) => {
    return Math.max(0, Math.floor((currentPage - 1) / countControl));
  };

  const onPrev = () => {
    const offset = calculateOffset(currentPage, countControl) - 1;
    axios
      .get('/api/specific-stock-all', {
        params: { code: stockCode, offset: offset, countControl: countControl },
      })
      .then((response) => {
        let stocks = response.data.stock;
        totalCount = response.data.totalCount;
        stocks.map((stock: Istock) => {
          if (!Array.isArray(stock.news)) {
            stock.news = JSON.parse(stock.news);
          }
          return stock;
        });
        setStocks(stocks);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  };

  const onNext = () => {
    const offset = calculateOffset(currentPage, countControl) + 1;
    axios
      .get('/api/specific-stock-all', {
        params: { code: stockCode, offset: offset, countControl: countControl },
      })
      .then((response) => {
        let stocks = response.data.stock;
        totalCount = response.data.totalCount;
        stocks.map((stock: Istock) => {
          if (!Array.isArray(stock.news)) {
            stock.news = JSON.parse(stock.news);
          }
          return stock;
        });
        setStocks(stocks);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalCount; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  const pageNumbers = getPageNumbers();

  return (
    <Container>
      {totalCount % currentPage < countControl ? (
        <PageArrowBox>
          <PagePrev src={prev} onClick={onPrev} />
        </PageArrowBox>
      ) : (
        <></>
      )}

      {pageNumbers.map((number) => {
        return (
          <PageItem
            onClick={() => {
              handlePageChange(number);
            }}
            key="number"
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </PageItem>
        );
      })}

      {!(totalCount % currentPage > countControl) ? (
        <PageArrowBox>
          <PageNext src={next} onClick={onNext} />
        </PageArrowBox>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const PageArrowBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagePrev = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    content: url(${prevHover});
    cursor: pointer;
  }
`;

const PageNext = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    content: url(${nextHover});
    cursor: pointer;
  }
`;

const PageItem = styled.li`
  padding: 0 5;
  &.active {
    border-radius: 4px;
    background-color: #60d6bf;

    color: #fff;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PagePrevBtn = styled.button``;
export default Pagination;
