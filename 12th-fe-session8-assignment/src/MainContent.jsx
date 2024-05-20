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

  return (
    <Container>
      <WatchedWatchMovie>
        <h2>봤는 영화 목록</h2>
        <WatchMovieList movies={watchedMovies} />
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
        <WatchMovieList movies={toWatchMovies} />
      </WatchedWatchMovie>
    </Container>
  );
}

export default MainContent;
