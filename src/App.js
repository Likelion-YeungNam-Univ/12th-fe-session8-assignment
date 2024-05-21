import React, { useState, useEffect } from 'react';
import './App.css';

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

function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const movieList = fetchMovies();
    setMovies(movieList);
    setLoading(false);
  }, []);

  const addToWatched = (movie) => {
    setWatchedMovies([...watchedMovies, movie]);
    setMovies(movies.filter(m => m.id !== movie.id));
  };

  const addToToWatch = (movie) => {
    setToWatchMovies([...toWatchMovies, movie]);
    setMovies(movies.filter(m => m.id !== movie.id));
  };

  const removeFromWatched = (movie) => {
    setWatchedMovies(watchedMovies.filter(m => m.id !== movie.id));
    setMovies([...movies, movie].sort((a, b) => a.id - b.id));
  };

  const removeFromToWatch = (movie) => {
    setToWatchMovies(toWatchMovies.filter(m => m.id !== movie.id));
    setMovies([...movies, movie].sort((a, b) => a.id - b.id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
        <div className="movie-list-container">
          <div className="movie-column">
            <h2>본 영화 목록</h2>
            {watchedMovies.map(movie => (
              <div key={movie.id}>
                {movie.title} <button onClick={() => removeFromWatched(movie)}>삭제</button>
              </div>
            ))}
          </div>
          <div className="movie-column">
            {movies.map(movie => (
              <div key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <button onClick={() => addToWatched(movie)}>본 영화 담기</button>
                <button onClick={() => addToToWatch(movie)}>볼 영화 담기</button>
              </div>
            ))}
          </div>
          <div className="movie-column">
            <h2>볼 영화 목록</h2>
            {toWatchMovies.map(movie => (
              <div key={movie.id}>
                {movie.title} <button onClick={() => removeFromToWatch(movie)}>삭제</button>
              </div>
            ))}
          </div>
        </div>
      </header>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
