import styled from 'styled-components';
import './App.css'
import SelectedMovies from './components/SelectedMovies';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';

function App() {
  const [LoadingState, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [watchedMv, setWatchedMv] = useState([]);
  const [wishMv, setWishMv] = useState([]);


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

  // 1번만 실행
  useEffect(() => {
    // 로딩상태로 시작
    setLoading(true);

    // fetch함수실행
    const fetchedMovies = fetchMovies();
    setMovies(fetchedMovies);

    // 봤는 영화 목록 초기화
    setWatchedMv([]);

    // 로딩상태 변경
    setLoading(false);
  },[])



  // 봤는 영화 담기 함수
  const watchedMovie = (deleteId) =>{
      
      const newMovies = movies.filter(movie => movie.id !== deleteId);
      const newWatchedMv = movies.filter(movie => movie.id === deleteId);

      setMovies(newMovies);
      setWatchedMv([...watchedMv, ...newWatchedMv]); // 둘 다 배열이므로 모두 스프레드 연산자 사용
  }


  // 볼 영화 담기 함수
  const wishMovie = (deleteId)=> {
    const newMovies = movies.filter(movie => movie.id !== deleteId);
    const newWishMv = movies.filter(movie => movie.id === deleteId);

    setMovies(newMovies);
    setWishMv([...wishMv, ...newWishMv]);
  }

  // 봤는 영화 삭제 함수
  const deleteWatchMovie = (deleteId) => {

    // 삭제영화
    const deleteMovies = watchedMv.filter(watchedMv => watchedMv.id === deleteId);
    // 봤는 영화목록
    const newWatchedMv = watchedMv.filter(watchedMv => watchedMv.id !== deleteId);

    setWatchedMv([...newWatchedMv]);

    // 영화목록 업데이트 후 정렬
    const updateMovies = [...movies, ...deleteMovies];
    updateMovies.sort((a, b) => a.id - b.id); //a.id < b.id 일때 a가 b보다 먼저 옴
    setMovies(updateMovies); 
  }
  // 볼 영화 삭제 함수
  const deletWishMovie = (deleteId) => {

    // 삭제영화
    const deleteMovies = wishMv.filter(wishMv => wishMv.id === deleteId);
    // 봤는 영화목록
    const newWishMv = wishMv.filter(wishMv => wishMv.id !== deleteId);

    setWishMv([...newWishMv]);

    // 영화목록 업데이트 후 정렬
    const updateMovies = [...movies, ...deleteMovies];
    updateMovies.sort((a, b) => a.id - b.id); //a.id < b.id 일때 a가 b보다 먼저 옴
    setMovies(updateMovies); 
  }

  return (
    <ContentsContainer>
      <Header>Movie List</Header>

      {/* fetchMovies()실행완료 전 Loading 띄우기 */}
      {LoadingState ? (
        <Loading>Loading...</Loading>
      )
      :
      (
        <MainContainer>

          {/* 봤는 영화 목록 */}
          <SelectedMovies title='봤는 영화 목록' movies={watchedMv} deleteMovie={deleteWatchMovie}></SelectedMovies>

          {/* 영화목록 */}
          <Main>
              {movies.map((movie)=>
                {
                  return(
                    <MovieList key={movie.id} id={movie.id} title={movie.title} watchedMovie={watchedMovie} wishMovie={wishMovie}></MovieList>
                  )
                }
              )}
          </Main>

          {/* 볼 영화 목록 */}
          <SelectedMovies title='볼 영화 목록' movies={wishMv} deleteMovie={deletWishMovie}></SelectedMovies>

        </MainContainer>
      )
      }

      <Footer>Footer</Footer>
    </ContentsContainer>
  );
}

// Header와 Footer 공통 스타일
const commonStyles = `
  flex: 1; // 세로 폭 설정
  width: 100%;
  background-color: #333333;
  color: white;
  padding: 12px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Header=styled.h2`
 ${commonStyles}
`
const Footer=styled.h2`
  ${commonStyles}
  /* position: fixed; */
  bottom: 0;
`

const MainContainer=styled.div`
  display: flex;
  height: 80%;
  /* flex: 8; // 세로 폭 설정 */
`

const Main=styled.div`
  height: 100%;
  flex: 6; // 가로 폭 설정
  overflow-y: scroll;
`
const ContentsContainer=styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Loading=styled.h2`

display: flex;
align-items: center;
justify-content: center;
flex: 8; // 세로 폭 설정

`

export default App;
