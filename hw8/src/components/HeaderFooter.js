import styled from "styled-components";
import React from "react";

export const Header=()=>{
    return(
    <wrapper>Movie List</wrapper>
    );    
};

export const Footer=()=>{
    return(
    <wrapper>Footer</wrapper>
    );    
};

const Wrapper=styled.div`
background-color: rgb(50, 50, 50);
color:white;
text-align: center;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
