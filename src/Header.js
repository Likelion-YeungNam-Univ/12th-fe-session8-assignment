import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      Movie List
    </HeaderContainer>
  );
};

const HeaderContainer = styled.h1`
  background-color : #282828;
  color : white;
  text-align : center;
  width : 100%;
  top : 0;
  position : fixed;
  margin : 0;
  height : 60px;
  display: flex;
  align-items : center;
  justify-content : center;
`;

export default Header;
