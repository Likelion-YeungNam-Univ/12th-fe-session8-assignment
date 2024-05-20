import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components";

const MovieList = ({ movies, addSeen, addWish }) => {
  return (
    <Box>
      {movies.map((el) => {
        return (
          <MovieListItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            addSeen={addSeen}
            addWish={addWish}
          />
        );
      })}
    </Box>
  );
};

const Box = styled.div`
  height: 100%;
  width: 50%;
  overflow-y: scroll;
`;

export default MovieList;
