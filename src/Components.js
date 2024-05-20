import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrapper>Header</Wrapper>
  )
}

export const Footer = () => {
    return (
        <Wrapper>Footer</Wrapper>
      ) 
}

const Wrapper = styled.div`
    height : 100px;
    width : 100%;

    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #000;
    color : #fff;
    font-size : 30px;
    font-weight : 600;
`;