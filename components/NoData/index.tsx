import styled from '@emotion/styled';
import React from 'react';
import SearchData from '@images/search-data.png';
interface NoDataProps {
  text: string;
}

const NoData = ({ text }: NoDataProps) => {
  return (
    <Container>
      <ImgBox>
        <img src={SearchData} width="280px"></img>
      </ImgBox>
      <div>
        <strong
          style={{
            fontSize: '20px',
          }}
        >
          {text}
        </strong>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;

const ImgBox = styled.div`
  margin-bottom: 5px;
`;

export default NoData;
