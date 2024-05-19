import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      Footer
    </FooterContainer>
  );
};

const FooterContainer = styled.h1`
  background-color : #282828;
  color : white;
  text-align : center;
  bottom : 0;
  position: fixed;
  width: 100%;
  margin : 0;
  height : 60px;
  display : flex;
  justify-content : center;
  align-items : center;
`;

export default Footer;
