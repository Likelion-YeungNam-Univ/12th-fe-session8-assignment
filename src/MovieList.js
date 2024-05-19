import React from 'react';
import styled from 'styled-components';

const MovieList = ({ movies, addToWatchedMovie, addToMovieToWatch }) => {
  return (
    <MovieListContainer>
      {movies.map(movie => (
        <MovieListItem key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.description}</p>
          <button onClick={() => addToWatchedMovie(movie.id)}>봤는영화 담기</button>
          <button onClick={() => addToMovieToWatch(movie.id)}>볼 영화 담기</button>
        </MovieListItem>
      ))}
    </MovieListContainer>
  );
};

const MovieListContainer = styled.ul`
  overflow-y : auto;
  width : 60%;
  text-align : center;
  list-style-type : none;
  margin : 0px;
  padding : 0px;
`;

const MovieListItem = styled.li`
  border-bottom: 2px solid #c8c8c8;
`;

export default MovieList;
