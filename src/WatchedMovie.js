import React from 'react';
import styled from 'styled-components';

const WatchedMovie = ({ watchedMovies, removeFromWatchedMoive }) => {
  return (
    <WatchedMovieContainer>
      <h4>봤는 영화 목록</h4>
      {watchedMovies.map(movie => (
        <WatchedMovieList key={movie.id}>
          <WatchedMovieItem>
            {movie.title}
            <button onClick={() => removeFromWatchedMoive(movie.id)}>삭제</button>
          </WatchedMovieItem>
        </WatchedMovieList>
      ))}
    </WatchedMovieContainer>
  );
};

const WatchedMovieContainer = styled.div`
  background-color : #dcdcdc;
  width : 20%;
  text-align : center;
  padding : 20px 0px;
`;

const WatchedMovieList = styled.ul`
  list-style-type : none;
  margin-right : 40px;
`;

const WatchedMovieItem = styled.li`
  border-bottom: 2px solid #c8c8c8;
`;

export default WatchedMovie;
