import React from 'react';
import { NavContainer, NavContents, NavTitle } from './style';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <NavContainer>
      <NavContents>
        <NavLink to="/stockrecord">
          {' '}
          <NavTitle>📝 종목 기록</NavTitle>
        </NavLink>
        <NavTitle>🏷️ 관심 종목</NavTitle>
        {/* <NavTitle>📈 기록 분석</NavTitle> */}
        {/* <NavTitle>😊 마이페이지</NavTitle> */}
      </NavContents>
    </NavContainer>
  );
};

export default SideNav;
