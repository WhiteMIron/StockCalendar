import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Test = () => {
  return (
    <Container>
      <Box>
        <Content>{/* 다른 콘텐츠들 */}</Content>
        <IconContainer>
          <Icon>아이콘</Icon>
          <StyledSpan>네이버 증권으로 가기</StyledSpan>
        </IconContainer>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box = styled.div`
  position: relative; /* Box를 relative로 설정 */
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 400px; /* 예시로 높이 설정 */
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  overflow-y: auto; /* 내용이 컨테이너를 벗어나면 스크롤 생성 */
`;

const Content = styled.div`
  padding: 20px;
`;

const IconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSpan = styled.span`
  display: none;
  position: absolute;
  background-color: #333;
  width: 200px;
  color: #fff;
  top: -100px; /* 아이콘 위로 위치하도록 수정 */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;
`;
const Icon = styled.div`
  display: inline-block;
  position: relative;
  z-index: 2;
  &:hover ~ ${StyledSpan} {
    display: block;
  }
`;

export default Test;
