import styled from '@emotion/styled';

export const NavContainer = styled.div`
  /* height: 100%; */
  width: 15%;
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1); */
  /* background: #f5f6fa; */
  padding: 0 15px;
  background: #222;
`;
export const NavTitle = styled.li`
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #189cda;
    color: white;
  }
`;

export const NavContents = styled.ul`
  /* text-align: center; */
  font-size: 17px;
`;

export const Icon = styled.div`
  display: flex;
  > img {
    margin-right: 10px;
  }
`;
