import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React from 'react';
import Clock from 'react-live-clock';
const Header = (props: { user: IUser | undefined | false }) => {
  return (
    <Container
      style={{
        background: '#60d6bf',
        display: 'flex',
        justifyContent: 'end',
        alignContent: 'center',
        minHeight: '80px',
        minWidth: '1400px',
        paddingRight: '22px',
      }}
    >
      <h1 style={{ color: '#fff' }}>
        {<Clock format={'M월 D일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />}{' '}
        {props.user ? props.user.email : null}
      </h1>
    </Container>
  );
};

const Container = styled.div`
  background: #60d6bf;
  display: flex;
  justify-content: end;
  align-content: center;
  min-height: 80px;
  min-width: 1400px;
  padding-right: 22px;
`;

export default Header;
