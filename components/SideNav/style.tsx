import styled from '@emotion/styled';

export const NavContainer = styled.div`
  height: 100%;
  width: 13%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1);
  background: #f5f6fa;
  padding-top: 20px;
`;
export const NavTitle = styled.li`
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const NavContents = styled.ul`
  text-align: center;
  font-size: 17px;
`;
