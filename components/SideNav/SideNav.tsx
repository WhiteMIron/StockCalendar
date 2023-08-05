import React from 'react';
import { NavContainer, NavContents, NavTitle, Icon } from './style';
import { NavLink } from 'react-router-dom';
import star from '@images/star.png';
const SideNav = () => {
  return (
    <NavContainer>
      <h1
        style={{
          paddingLeft: '10px',
          color: '#fff',
        }}
      >
        주식 캘린더
      </h1>
      <NavContents>
        <NavLink to="/stockrecord">
          {' '}
          <NavTitle>
            {' '}
            <Icon>
              {/* <img src={star} width="auto" height="24px"></img> */}
              종목 기록
            </Icon>{' '}
          </NavTitle>
        </NavLink>
        <NavTitle> 관심 종목</NavTitle>
        <NavTitle> 카테고리</NavTitle>

        {/* <NavTitle>🎯 관심 종목</NavTitle>
        <NavTitle>🏷️ 카테고리</NavTitle> */}

        {/* <NavTitle>📈 기록 분석</NavTitle> */}
        {/* <NavTitle>😊 마이페이지</NavTitle> */}
      </NavContents>
    </NavContainer>
  );
};

export default SideNav;
