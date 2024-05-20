import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MovieItem = styled.div`
  width: 100%;
  display: flex;
  color: black;
  align-items: center;
  flex-direction: column;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  margin-left: 10px;
  width: 80px;
  height: 20px;
`;

function WatchMovieList({ movies, deleteMovieItem }) {
  return (
    <ListContainer>
      {/* MainContent에서 각각 toWatchMovies, watchedMovies 전달받음 */}
      {/* 좌측 '봤는 영화목록' ,우측 '볼 영화목록' 작성로직 */}
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <SubContainer>
            <span>Movie {movie.id}</span>
            <Button onClick={() => deleteMovieItem(movie)}>삭제</Button>
          </SubContainer>
          <hr style={{ width: "100%" }} />
        </MovieItem>
      ))}
    </ListContainer>
  );
}

export default WatchMovieList;
