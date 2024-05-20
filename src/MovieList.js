import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components";

const MovieList = ({ movies }) => {
  return (
    <Box>
      <div>left</div>
      <MovieInfo>
        {movies.map((el) => {
          return (
            <MovieListItem
              key={el.id}
              id={el.id}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </MovieInfo>
      <div>right</div>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

const MovieInfo = styled.div`
  height: 100%;
  width: 50%;
  overflow-y: scroll;
`;

export default MovieList;
