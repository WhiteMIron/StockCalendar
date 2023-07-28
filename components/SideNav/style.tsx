import styled from '@emotion/styled';

export const NavContainer = styled.div`
  /* height: 100%; */
  width: 12%;
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1), 0 0 168px 13px rgba(7, 0, 0, 0.1); */
  /* background: #f5f6fa; */
  padding: 0 15px;
  /* background: #323233; */
  border-right: 1px solid black;
`;
export const NavTitle = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    /* border: 1px solid black; */
    background-color: #189cda;
    color: white;
    /* text-decoration: underline; */
  }
`;

export const NavContents = styled.ul`
  /* text-align: center; */
  font-size: 17px;
`;
