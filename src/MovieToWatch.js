import React from 'react';
import styled from 'styled-components';

const MovieToWatch = ({ moviesToWatch, removeFromMoviesToWatch }) => {
  return (
    <MovieToWatchContainer>
      <h4>볼 영화 목록</h4>
      {moviesToWatch.map(movie => (
        <MovieToWatchList key={movie.id}>
          <MovieToWatchItem>
            {movie.title}
            <button onClick={() => removeFromMoviesToWatch(movie.id)}>삭제</button>
          </MovieToWatchItem>
        </MovieToWatchList>
      ))}
    </MovieToWatchContainer>
  );
};

const MovieToWatchContainer = styled.div`
  background-color : #dcdcdc;
  width : 20%;
  text-align : center;
  padding : 20px 0px;
`;

const MovieToWatchList = styled.ul`
  list-style-type : none;
  margin-right : 40px;
`;

const MovieToWatchItem = styled.li`
  border-bottom: 2px solid #c8c8c8;
`;

export default MovieToWatch;
