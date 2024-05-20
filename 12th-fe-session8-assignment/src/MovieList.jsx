import React from "react";
import styled from "styled-components";

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

function MovieList({ movies, addToWatched, addToToWatch }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <ListContainer key={movie.id}>
            <LiContainer>
              <div>{movie.title}</div>
              <div>{movie.description}</div>
              <ButtonContainer>
                <button onClick={() => addToWatched(movie)}>
                  봤는 영화 담기
                </button>
                <button onClick={() => addToToWatch(movie)}>
                  볼 영화 담기
                </button>
              </ButtonContainer>
             
            </LiContainer>
            <hr style={{ width: "100%" }}></hr>
          </ListContainer>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
