import "./App.css"
import { useEffect, useState } from "react";
import MovieList from "./MovieList";


function App() {
  const [Loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [willMovies, setWillMovies] = useState([]);

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


  useEffect(()=>{
    setLoading(true);
    const movies = fetchMovies();
    setMovies(movies);
    setLoading(false);
  },[]);

  const watchedMv = (id)=>{
    const newWatchedMv = movies.filter(movie=>movie.id === id);
    updateMv(newWatchedMv);
    setWatchedMovies((watchedMovie)=>[...watchedMovie, newWatchedMv]);

    const changeMv = movies.filter(movie=>movie.id !== id);
    updateMv(changeMv);
    setMovies(changeMv);
  }

  const willMv = (id)=>{
    const newWillMv = movies.filter(movie=>movie.id === id);
    updateMv(newWillMv);
    setWatchedMovies((willMovie)=>[...willMovie, newWillMv]);

    const changeMv = movies.filter(movie=>movie.id !== id);
    updateMv(changeMv);
    setMovies(changeMv);
  }

  const delWatchedMv = (e)=>{
    const newWatchedMv = movies.filter(movie=>movie.id !== e.id);
    updateMv(newWatchedMv);
    setWatchedMovies(newWatchedMv);
    setMovies([...movies,e]);
  }
  const delWillMv = (e)=>{
    const newWillMv = movies.filter(movie=>movie.id !== e.id);
    updateMv(newWillMv);
    setWillMovies(newWillMv);
    setMovies([...movies,e]);
  }

  const updateMv = (movieList)=>{
    return movieList.sort((a,b) => a.id - b.id);
  }


  return(
  <div>
    <h1 className="header">MovieList</h1>

    <div style={{
      display: "flex",
      justifyContent: "space-between"}}>
      <div className="list">
          <p>봤는 영화 목록</p>
          <ul>
            {watchedMovies.map((e)=>
            <li>{e.title}
              <button onClick={delWatchedMv}>삭제</button>
            </li>
            )}
          </ul>
      </div>
      {Loading ? (
        <h2>Loading...</h2>
      ):(
      movies.map((movie)=>{
        <MovieList title={movie.title} description={movie.description} watchedMovie={watchedMv} willMovie={willMv}></MovieList>
      })
      )}
            
      <div className="list">
        <p>볼 영화 목록</p>
        <ul>
        {willMovies.map((e)=>
            <li>{e.title}
              <button onClick={delWillMv}>삭제</button>
            </li>
            )}
        </ul>
      </div>
    </div>

    <h1 className="footer">Footer</h1>
  </div>
  )
}

export default App;
