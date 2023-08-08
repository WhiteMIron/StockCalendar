import React from 'react';
import { NavContainer, NavContents, NavTitle, Icon } from './style';
import { NavLink } from 'react-router-dom';
import star from '@images/star.png';
import styled from '@emotion/styled';
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
        <StyledNavLink to="/stockrecord">
          {' '}
          <NavTitle>
            {' '}
            <Icon>
              {/* <img src={star} width="auto" height="24px"></img> */}
              종목 기록
            </Icon>{' '}
          </NavTitle>
        </StyledNavLink>

        <StyledNavLink to="/interest">
          {' '}
          <NavTitle>
            {' '}
            <Icon>
              {/* <img src={star} width="auto" height="24px"></img> */}
              관심 종목
            </Icon>{' '}
          </NavTitle>
        </StyledNavLink>
        <StyledNavLink to="/category">
          {' '}
          <NavTitle>
            {' '}
            <Icon>
              {/* <img src={star} width="auto" height="24px"></img> */}
              카테고리
            </Icon>{' '}
          </NavTitle>
        </StyledNavLink>

        <StyledNavLink to="/mypage">
          {' '}
          <NavTitle>
            {' '}
            <Icon>
              {/* <img src={star} width="auto" height="24px"></img> */}
              마이페이지
            </Icon>{' '}
          </NavTitle>
        </StyledNavLink>

        {/* <NavTitle>📈 기록 분석</NavTitle> */}
        {/* <NavTitle>😊 마이페이지</NavTitle> */}
      </NavContents>
    </NavContainer>
  );
};

const StyledNavLink = styled(NavLink)`
  display: block;
  &.active {
    background-color: #189cda;
  }
`;

export default SideNav;
