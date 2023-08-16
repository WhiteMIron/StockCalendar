import styled from '@emotion/styled';
import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  return (
    <Container>
      <LoadingBox>
        <BeatLoader color="#36d7b7" />
      </LoadingBox>{' '}
    </Container>
  );
};

const Container = styled.div``;
const LoadingBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Loading;
