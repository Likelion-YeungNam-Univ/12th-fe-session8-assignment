import styled from "styled-components";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SpeicalList from "./SpeicalList";

const Center = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [seenList, setSeenList] = useState([]);
  const [wishList, setWishList] = useState([]);

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

  const addSeen = (id) => {
    const new_Seen = movies.find((el) => el.id === id);
    const new_Movies = movies.filter((el) => el.id !== id);

    setSeenList((seenList) => [...seenList, new_Seen]);
    setMovies(new_Movies);
  };

  const addWish = (id) => {
    const new_Wish = movies.find((el) => el.id === id);
    const new_Movies = movies.filter((el) => el.id !== id);

    setWishList((wishList) => [...wishList, new_Wish]);
    setMovies(new_Movies);
  };

  const deleteSeen = (id) => {
    const delete_Seen = seenList.find((el) => el.id === id);
    const new_Seen = seenList.filter((el) => el.id !== id);

    setSeenList(new_Seen);
    setMovies((movies) => {
      const new_Movies = [...movies, delete_Seen];
      new_Movies.sort((a, b) => a.id - b.id);
      return new_Movies;
    });
  };

  const deleteWish = (id) => {
    const delete_Wish = wishList.find((el) => el.id === id);
    const new_Wish = wishList.filter((el) => el.id !== id);

    setWishList(new_Wish);
    setMovies((movies) => {
      const new_Movies = [...movies, delete_Wish];
      new_Movies.sort((a, b) => a.id - b.id);
      return new_Movies;
    });
  };

  return (
    <Box>
      {loading === true ? (
        <Loading>Loading...</Loading>
      ) : (
        <MovieBox>
          <SeenList>
            <h3>봤는 영화 목록</h3>
            <SpeicalList movieList={seenList} deleteMethod={deleteSeen} />
          </SeenList>
          <MovieList movies={movies} addSeen={addSeen} addWish={addWish} />
          <WishList>
            <h3>볼 영화 목록</h3>
            <SpeicalList movieList={wishList} deleteMethod={deleteWish} />
          </WishList>
        </MovieBox>
      )}
    </Box>
  );
};

const Box = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
`;

const Loading = styled.h1`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;

const MovieBox = styled.div`
  display: flex;
  width: 100%;
`;

const SeenList = styled.div`
  width: 25%;
  text-align: center;
`;

const WishList = styled.div`
  width: 25%;
  text-align: center;
`;

export default Center;
