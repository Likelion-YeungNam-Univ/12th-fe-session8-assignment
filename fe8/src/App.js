import styled from 'styled-components';
import './App.css'

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
    <div>
      <Header>Movie List</Header>


      <div>

        {/* 봤는 영화 목록 */}


        {/* 영화목록 */}



        {/* 볼 영화 목록 */}


      </div>


      <Footer>Footer</Footer>
    </div>
  );
}

// Header와 Footer 공통 스타일
const commonStyles = `
  height: fit-content;
  width: 100%;
  background-color: #333333;
  color: white;
  padding: 20px 0;
  text-align: center;

`
const Header=styled.h2`
 ${commonStyles}
`
const Footer=styled.h2`
  ${commonStyles}

  position: fixed;
  bottom: 0;
`

export default App;
