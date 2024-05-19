import styled from 'styled-components';
import './App.css'
import SelectedMovies from './components/SelectedMovies';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';

function App() {
  // 로딩상태 관리
  const [LoadingState, setLoading] = useState(true);

  // 영화상태 관리
  const [movies, setMovies] = useState([]);
  const [watchedMv, setWatchedMv] = useState([]);
  const [wishMv, setWishMv] = useState([]);


  // 영화 목록 가져오는 함수(제공)
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


  // fetchMovies()를 1번만 실행
  useEffect(() => {
    
    setLoading(true); // 로딩상태로 시작

    const fetchedMovies = fetchMovies(); // 영화 목록 가져오기
    setMovies(fetchedMovies);

    setWatchedMv([]); // 봤는 영화 목록 초기화
    setWishMv([]); // 볼 영화 목록 초기화

    setLoading(false); // 로딩상태 해제
  },[])



  // 봤는 영화 담기 함수
  const watchedMovie = (selectId) =>{
      
      const newMovies = movies.filter(movie => movie.id !== selectId);  // 담기 안한 영화로 영화목록 구성
      const newWatchedMv = movies.filter(movie => movie.id === selectId); // 담기 한 영화로 봤는 영화목록 구성

      setMovies(newMovies); 
      setWatchedMv((watchedMv) => [...watchedMv, ...newWatchedMv]); // 둘 다 배열이므로 모두 스프레드 연산자 사용
  }


  // 볼 영화 담기 함수
  const wishMovie = (selectId)=> {
    const newMovies = movies.filter(movie => movie.id !== selectId);
    const newWishMv = movies.filter(movie => movie.id === selectId);  // 담기 한 영화로 볼 영화목록 구성

    setMovies(newMovies);
    setWishMv((wishMv) => [...wishMv, ...newWishMv]);
  }


  // 영화 삭제 함수
  const deleteMovie = (deleteId, type) => {
    let deleteMovies;
    let newMoviesList;

    if (type === "watched") { // 본 영화 삭제
      deleteMovies = watchedMv.filter(movie => movie.id === deleteId);
      newMoviesList = watchedMv.filter(movie => movie.id !== deleteId);
      setWatchedMv(newMoviesList);
    } else if (type === "wish") { // 볼 영화 삭제
      deleteMovies = wishMv.filter(movie => movie.id === deleteId);
      newMoviesList = wishMv.filter(movie => movie.id !== deleteId);
      setWishMv(newMoviesList);
    }

    // 영화목록 업데이트 후 정렬
    const updateMovies = [...movies, ...deleteMovies];
    updateMovies.sort((a, b) => (a.id - b.id)) ; // a.id - b.id가 음수일때 a가 b앞에 옴
    setMovies(updateMovies);
  }


  return (
    <ContentsContainer>
      {/* 헤더 */}
      <Header>Movie List</Header>

      {/* fetchMovies()실행완료 전이면 Loading 띄우기 */}
      {LoadingState ? (
        <Loading>Loading...</Loading>
      )
      :
      (
        <MainContainer>

          {/* 봤는 영화 목록 */}
          <SelectedMovies title='봤는 영화 목록' movies={watchedMv} deleteMovie={(id) => deleteMovie(id, "watched")}></SelectedMovies>

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
          <SelectedMovies title='볼 영화 목록' movies={wishMv} deleteMovie={(id) => deleteMovie(id, "wish")}></SelectedMovies>

        </MainContainer>
      )
      }

      {/* 푸터 */}
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
  bottom: 0;
`

const MainContainer=styled.div`
  display: flex;
  height: 80%;
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
