import React, { useState } from 'react';
import styled from 'styled-components';

const Main = ({ movieList, setMovieList }) => {
  const [watchedMovieList, setWatchedMovieList] = useState([]);
  const [toWatchMovieList, setToWatchMovieList] = useState([]);

  return (
    <MainWrapper>
      <MovieSection
        title="본 영화 목록"
        movies={watchedMovieList}
        setMovies={setWatchedMovieList}
        onDelete={(movie) => setMovieList((prev) => [...prev, movie].sort((a, b) => a.id - b.id))}
      />
      <MovieList
        movieList={movieList}
        setWatchedMovieList={setWatchedMovieList}
        setToWatchMovieList={setToWatchMovieList}
        setMovieList={setMovieList}
      />
      <MovieSection
        title="볼 영화 목록"
        movies={toWatchMovieList}
        setMovies={setToWatchMovieList}
        onDelete={(movie) => setMovieList((prev) => [...prev, movie].sort((a, b) => a.id - b.id))}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
`;

const MovieSection = ({ title, movies, setMovies, onDelete }) => {
  return (
    <SelectedMovieList>
      <h2>{title}</h2>
      <div>
        {movies.map((el) => (
          <SelectedMovie key={el.id}>
            {el.title}
            <button onClick={() => {
              setMovies((prev) => prev.filter((movie) => movie.id !== el.id));
              onDelete(el);
            }}>삭제</button>
          </SelectedMovie>
        ))}
      </div>
    </SelectedMovieList>
  );
};

const SelectedMovieList = styled.div`
  width: 20%;
  height: 500px;
  background-color: #f1f1f1;
  text-align: center;
  box-sizing: border-box;
  padding: 15px;
  margin: 15px 0;
`;

const SelectedMovie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const MovieList = ({ movieList, setWatchedMovieList, setToWatchMovieList, setMovieList }) => {
  return (
    <MovieListWrapper>
      <div className="movieList">
        {movieList.map((item) => (
          <Movie key={item.id}>
            {item.title}
            <br />
            {item.description}
            <br />
            <div>
              <button onClick={() => {
                setMovieList((prev) => prev.filter((movie) => movie.id !== item.id));
                setWatchedMovieList((prev) => [...prev, item]);
              }}>본 영화 담기</button>
              <button onClick={() => {
                setMovieList((prev) => prev.filter((movie) => movie.id !== item.id));
                setToWatchMovieList((prev) => [...prev, item]);
              }}>볼 영화 담기</button>
            </div>
          </Movie>
        ))}
      </div>
    </MovieListWrapper>
  );
};

const MovieListWrapper = styled.div`
  width: 60%;
  height: 500px;
  overflow-y: auto;
`;

const Movie = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 3px solid #f0f0f0;
`;

export default Main;
