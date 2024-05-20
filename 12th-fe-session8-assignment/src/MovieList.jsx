import { useEffect, useState } from "react";
import styled from "styled-components";
const fetchMovies = () => {
  const movies = [];

  for (let i = 0; i <= 2500; i++) {
    movies.push({
      id: i,
      title: `Movie ${i}`,
      description: `Description for Movie ${i}`,
    });
    console.log("2500개의 영화 목록 가져오는 중...");
  }
  alert("데이터를 가져오는 중입니다...");
  return movies;
};

const LiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let movieList = fetchMovies();
    setMovies(movieList);
    setLoading(false);
  }, []);

  // if (loading) {
  //   return <h2 style={{ marginTop: "20px" }}>Loading....</h2>;
  // }
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <ListContainer>
            <LiContainer key={movie.id} style={{ width: "100%" }}>
              <div>{movie.title}</div>
              <div>{movie.description}</div>
              <ButtonContainer>
                <button>봤는 영화 담기</button>
                <button>볼 영화 담기</button>
              </ButtonContainer>
              <hr style={{ width: "100%" }}></hr>
            </LiContainer>
          </ListContainer>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
export default MovieList;
