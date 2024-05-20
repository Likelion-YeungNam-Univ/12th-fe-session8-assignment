import React from "react";
import styled from "styled-components";

const MovieListItem = ({ id, title, description, addSeen, addWish }) => {
  return (
    <Box>
      <div>{title}</div>
      <div>{description}</div>
      <button
        onClick={() => {
          addSeen(id);
        }}
      >
        봤는 영화 담기
      </button>
      <button
        onClick={() => {
          addWish(id);
        }}
      >
        볼 영화 담기
      </button>
    </Box>
  );
};

const Box = styled.div`
  margin: 5px;
  background-color: white;
  padding: 10px;
  text-align: center;
`;

export default MovieListItem;
