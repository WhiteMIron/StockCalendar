import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React from 'react';
import Clock from 'react-live-clock';
const Header = (props: { user: IUser | undefined | false }) => {
  return (
    <div
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
      {' '}
      <h1 style={{ color: '#fff' }}>
        {<Clock format={'M월 DD일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />}{' '}
        {props.user ? props.user.email : null}
      </h1>
      {/* <div style={{ padding: '0 25px 0 0', width: '100%', textAlign: 'right' }}>
        <h1 style={{ color: '#fff' }}>
          {<Clock format={'M월 DD일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />}{' '}
          {props.user ? props.user.email : null}
        </h1>
      </div> */}
    </div>
  );
};

export default Header;
