import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
import WatchedMovie from './WatchedMovie';
import MovieList from './MovieList';
import MovieToWatch from './MovieToWatch';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [moviesToWatch, setMoviesToWatch] = useState([]);

  const fetchMovies = () => {
    const movies = [];
    for (let i = 1; i <= 2500; i++) {
      movies.push({
        id: i,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
      console.log("2500개의 영화 목록을 가져오는 중...");
    }
    alert("데이터를 가져오는 중입니다...");
    return movies;
  };

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = fetchMovies();
      setMovies(moviesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const addToWatchedMovie = (id) => {
    const watchedMovieItem = movies.find((movie) => movie.id === id);
    setWatchedMovies((prevWatchedMovies) => [...prevWatchedMovies, watchedMovieItem]);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const addToMovieToWatch = (id) => {
    const movieToWatchItem = movies.find((movie) => movie.id === id);
    setMoviesToWatch((prevMovieToWatch) => [...prevMovieToWatch, movieToWatchItem]);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const removeFromWatchedMoive = (id) => {
    const movieToRemove = watchedMovies.find((movie) => movie.id === id);
    setWatchedMovies((prevWatchedMovie) => prevWatchedMovie.filter((movie) => movie.id !== id));
    setMovies((prevMovies) => {
      const updateMovies = [...prevMovies, movieToRemove];
      updateMovies.sort((a, b) => a.id - b.id);
      return updateMovies;
    });
  };

  const removeFromMoviesToWatch = (id) => {
    const movieToRemove = moviesToWatch.find((movie) => movie.id === id);
    setMoviesToWatch((prevMoviesToWatch) => prevMoviesToWatch.filter((movie) => movie.id !== id));
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, movieToRemove];
      updatedMovies.sort((a, b) => a.id - b.id);
      return updatedMovies;
    });
  };

  return (
    <Container>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <Main>
          <WatchedMovie watchedMovies={watchedMovies} removeFromWatchedMoive={removeFromWatchedMoive} />
          <MovieList movies={movies} addToWatchedMovie={addToWatchedMovie} addToMovieToWatch={addToMovieToWatch} />
          <MovieToWatch moviesToWatch={moviesToWatch} removeFromMoviesToWatch={removeFromMoviesToWatch} />
        </Main>
      )}

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height : 75vh;
  margin-top : 80px;
  position : fixed;
  width : 100%;
 `

export default App;