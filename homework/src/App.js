import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [willMovies, setWillMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // 본 영화에서 삭제 누르면 실행할 함수
  const watchedRemoveAndAddMovieList = (movie) => {
    const watched = watchedMovies.filter((item) => item.id !== movie.id);
    const movieList = [...movies, movie];
    // 오름차순 정렬
    const sortedMovies = movieList.sort((a, b) => a.id - b.id);
    setMovies(sortedMovies);
    setWatchedMovies(watched);
  };

  // 볼 영화에서 삭제 누르면 실행할 함수
  const willRemoveAndAddMovieList = (movie) => {
    const will = willMovies.filter((item) => item.id !== movie.id);
    const movieList = [...movies, movie];
    // 오름차순 정렬
    const sortedMovies = movieList.sort((a, b) => a.id - b.id);
    setMovies(sortedMovies);
    setWillMovies(will);
  };

  // 해당 영화를 영화 리스트에서 제거하는 함수
  const removeMovie = (id) => {
    const movieList = movies.filter((item) => item.id !== id.id);
    setMovies(movieList);
  };

  // 볼 영화 리스트에 추가하는 함수
  const addWillMovie = (title) => {
    const movies = [...willMovies, title];
    setWillMovies(movies);
  };

  // 본 영화 리스트에 추가하는 함수
  const addWatchedMovie = (title) => {
    const movies = [...watchedMovies, title];
    setWatchedMovies(movies);
  };

  // 데이터 가져오는 함수
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

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 2000);
    });
  };

  // 첫 랜더링시 데이터 가져오는 useEffect
  useEffect(() => {
    // 바로 데이터를 가져오는 걸 막기위해 promise사용
    const loadMovies = async () => {
      setLoading(true);
      const movies = await fetchMovies();
      setMovies(movies);
      setLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <div className="App">
      <div className="top">
        <h1>Movie List</h1>
      </div>
      <div className="main">
        <div className="main-saw">
          <h4>봤는 영화 목록</h4>
          <ul>
            {watchedMovies.map((item) => (
              <li>
                {item.title}
                <button
                  onClick={() => {
                    watchedRemoveAndAddMovieList(item);
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-movieList">
          <ul>
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              movies?.map((item, idx) => (
                <li>
                  <h4>{item.title}</h4>
                  <h4>{item.description}</h4>
                  <button
                    onClick={() => {
                      removeMovie(item);
                      addWatchedMovie(item);
                    }}
                  >
                    봤는 영화 담기
                  </button>
                  <button
                    onClick={() => {
                      removeMovie(item);
                      addWillMovie(item);
                    }}
                  >
                    볼 영화 담기
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="main-will">
          <h4>볼 영화 목록</h4>
          <ul>
            {willMovies.map((item) => (
              <li>
                {item.title}
                <button
                  onClick={() => {
                    willRemoveAndAddMovieList(item);
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
