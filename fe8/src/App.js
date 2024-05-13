import styled from 'styled-components';
import './App.css'
import SelectedMovies from './components/SelectedMovies';
import MovieList from './components/MovieList';

function App() {


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



  return (
    <ContentsContainer>
      <Header>Movie List</Header>

      <MainContainer>
        {/* 봤는 영화 목록 */}
        <SelectedMovies title='봤는 영화 목록'></SelectedMovies>

        {/* 영화목록 */}
        <Main>
          <MovieList></MovieList>
        </Main>

        {/* 볼 영화 목록 */}
        <SelectedMovies title='볼 영화 목록'></SelectedMovies>
      </MainContainer>

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
  /* height: 100%; */
  flex: 8; // 세로 폭 설정
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


export default App;
