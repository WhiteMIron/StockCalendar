import React from 'react';
import { NavContainer, NavContents, NavTitle } from './style';

const SideNav = () => {
  return (
    <NavContainer>
      <NavContents>
        <NavTitle>📝 종목 기록</NavTitle>
        <NavTitle>📈 기록 분석</NavTitle>
        <NavTitle>😊 마이페이지</NavTitle>
      </NavContents>
    </NavContainer>
  );
};

export default SideNav;
