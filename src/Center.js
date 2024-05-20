import styled from "styled-components";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Center = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    const movies = [];

    // movies 배열 안에 객체 형태의 데이터 추가
    for (let i = 1; i <= 2500; i++) {
      movies.push({
        id: i,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
      console.log("2500개의 영화 목록을 가져오는 중...");
    }

    // fetchMovies함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
    alert("데이터를 가져오는 중입니다...");

    return movies;
  };

  useEffect(() => {
    const loadedMovies = fetchMovies();
    setMovies(loadedMovies);
    setLoading(false);
  }, []);

  return (
    <Box>
      {loading === true ? (
        <Loading>Loading...</Loading>
      ) : (
        <MovieList movies={movies}></MovieList>
      )}
    </Box>
  );
};

const Box = styled.div`
  height: 80%;
  display: flex;
`;

const Loading = styled.h1`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;

export default Center;
