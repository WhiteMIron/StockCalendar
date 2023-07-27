import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        height: '5%',
        boxShadow: '0 0 5px 0 rgba(0,0,0,0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1)',
        background: '#60d6bf',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '80px',
      }}
    >
      <div style={{ padding: '0 20px 0 0', width: '100%', textAlign: 'right' }}>
        <h1 style={{ color: '#fff' }}>5월 9일 22:58 test@naver.com</h1>
      </div>
    </div>
  );
};

export default Header;
