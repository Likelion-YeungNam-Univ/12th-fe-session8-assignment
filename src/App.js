import { useEffect } from 'react';
import { Header, Footer} from './Components.js';
import Main from './Main.js';
import styled from 'styled-components';
import { useState } from 'react';

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

function App() {
  let [movieList, setMovieList] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);


  useEffect(()=>{
    setMovieList(fetchMovies());
    setIsLoaded(true);
  },[]);

  return (
    <div className="App">
      <Header/>
      {isLoaded ? <Main movieList={movieList} setMovieList={setMovieList}/> : <Placeholder/>}
      <Footer/>
    </div>
  );
}

const Placeholder = () => {
  const Wrapper = styled.div`
    height : 300px;
    font-size : 30px;
    font-weight : 600;
    display : flex;
    justify-content : center;
    align-items : center;
  `;
  return (
    <Wrapper>
      Loading...
    </Wrapper>
  )
}

export default App;
