import React from 'react';
import { NavContainer, NavContents, NavTitle } from './style';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <NavContainer>
      <h1
        style={{
          paddingLeft: '10px',
        }}
      >
        메뉴
      </h1>
      <NavContents>
        <NavLink to="/stockrecord">
          {' '}
          <NavTitle>📝 종목 기록</NavTitle>
        </NavLink>
        <NavTitle>🎯 관심 종목</NavTitle>
        <NavTitle>🏷️ 카테고리</NavTitle>

        {/* <NavTitle>📈 기록 분석</NavTitle> */}
        {/* <NavTitle>😊 마이페이지</NavTitle> */}
      </NavContents>
    </NavContainer>
  );
};

export default SideNav;
