import React from "react";
import styled from "styled-components";

const MovieListItem = ({ id, title, description }) => {
  return (
    <Box>
      <div>{title}</div>
      <div>{description}</div>
      <button>봤는 영화 담기</button>
      <button>볼 영화 담기</button>
      <hr />
    </Box>
  );
};

const Box = styled.div``;

export default MovieListItem;
