import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header, Footer } from './Components';
import Main from './Main';

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
  alert("데이터를 가져오는 중...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
};

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies();
      setMovieList(movies);
      setIsLoaded(true);
    };
    loadMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoaded ? <Main movieList={movieList} setMovieList={setMovieList} /> : <Placeholder />}
      <Footer />
    </div>
  );
}

const Placeholder = () => {
  const Wrapper = styled.div`
    height: 300px;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <Wrapper>Loading...</Wrapper>;
};

export default App;
