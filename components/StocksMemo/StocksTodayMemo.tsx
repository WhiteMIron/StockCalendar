import React from 'react';
import styled from '@emotion/styled';
const StocksTodayMemo = () => {
  return (
    <C>
      <TitleBox>
        <span>
          <strong>오늘의 증시 요약</strong>
          {'\u00A0'}편집 {/* <button>편집</button> */}
        </span>
      </TitleBox>
      <Container>
        오늘의 증시 요약오늘의 증시 요약오늘의 증시 요약오늘의 증시 요약오늘의 증시 요약오늘의 증시 요약
      </Container>
    </C>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  overflow-y: auto;
  padding: 20px;
`;
const C = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #dadada;
  resize: none;
  margin-bottom: 10px;
  &:focus {
    border: 1px solid #25d790;
  }
`;
const TitleBox = styled.div`
  padding: 10px 20px 0;
  margin-bottom: 5px;
`;

export default StocksTodayMemo;
