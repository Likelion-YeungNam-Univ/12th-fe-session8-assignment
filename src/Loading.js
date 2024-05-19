import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      Loading....
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  height : 75vh;
  margin-top : 80px;
  position : fixed;
  width : 100%;
  font-weight : bold;
  font-size : 2rem;
  display : flex;
  justify-content : center;
  align-items : center;
`;

export default Loading;
