import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieList from "./MovieList";
import WatchMovieList from "./WatchMovieList";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
`;

const WatchedWatchMovie = styled.div`
  flex: 1;
  background-color: #ced4da;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  overflow-y: auto;
`;

const MovieListContainer = styled.div`
  flex: 2;
  overflow-y: auto;
  padding-top: 80px;
  padding-bottom: 80px;
`;

function MainContent() {
  //초기화
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);

  useEffect(() => {
    setMovies(fetchMovies());
  }, []);

  const fetchMovies = () => {
    const movies = [];
    for (let i = 0; i <= 2500; i++) {
      movies.push({
        id: i,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
    }
    return movies;
  };

  //봤는영화담기 state업뎃
  const addToWatched = (movie) => {
    setWatchedMovies([...watchedMovies, movie]);
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
  };
  //볼영화담기 state업뎃
  const addToToWatch = (movie) => {
    setToWatchMovies([...toWatchMovies, movie]);
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
  };

  //삭제기능함수
  const deleteMovieItem = (movie) => {
    setMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id));
    setToWatchMovies((prev) => prev.filter((m) => m.id !== movie.id));
    setWatchedMovies((prev) => prev.filter((m) => m.id !== movie.id));
  };

  return (
    <Container>
      <WatchedWatchMovie>
        <h2>봤는 영화 목록</h2>
        <WatchMovieList
        // 봤는 영화목록에는 movies의 값으로 watchedMovies전달
          movies={watchedMovies}
          deleteMovieItem={deleteMovieItem}
        />
      </WatchedWatchMovie>
      <MovieListContainer>
        {/* 함수와 배열 props전달 */}
        <MovieList
          movies={movies}
          addToWatched={addToWatched}
          addToToWatch={addToToWatch}
        />
      </MovieListContainer>
      <WatchedWatchMovie>
        <h2>볼 영화 목록</h2>
        <WatchMovieList
        // 봤는 영화목록에는 movies의 값으로 toWatchMovies전달
          movies={toWatchMovies}
          deleteMovieItem={deleteMovieItem}
        />
      </WatchedWatchMovie>
    </Container>
  );
}

export default MainContent;
