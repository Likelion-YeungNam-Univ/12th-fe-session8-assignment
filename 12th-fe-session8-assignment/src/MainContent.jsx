import styled from "styled-components";
import MovieList from "./MovieList";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
`;

const WatchedWatchMovie = styled.div`
  flex: 1;
  background-color: #ced4da;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const MovieListContainer = styled.div`
  flex: 2;
  overflow-y: auto;
  padding-top: 80px; // 헤더 높이만큼 상단 패딩 조정
  padding-bottom: 80px; // 푸터 높이만큼 하단 패딩 조정
`;

function MainContent() {
  return (
    <Container>
      <WatchedWatchMovie>봤는 영화 목록</WatchedWatchMovie>
      <MovieListContainer>
        <MovieList></MovieList>
      </MovieListContainer>
      <WatchedWatchMovie>볼 영화 목록</WatchedWatchMovie>
    </Container>
  );
}
export default MainContent;
