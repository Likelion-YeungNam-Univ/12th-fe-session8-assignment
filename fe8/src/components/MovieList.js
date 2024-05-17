import styled from 'styled-components';


function MovieList({title, id, watchedMovie, wishMovie}){

    return(
        <MovieContainer>
            <p>{title}</p>
            <p>Description for Movie {id}</p>

            <Button onClick={() => {watchedMovie(id)}}>봤는 영화 담기</Button>
            <Button onClick={() => {wishMovie()}}>볼 영화 담기</Button>
            <hr></hr>
        </MovieContainer>
    )
}

const MovieContainer=styled.div`
    padding: 20px 0;
    text-align: center;
    line-height: 28px;
`
const Button=styled.button`
    padding: 2px 4px;
    margin-bottom: 20px;
`

export default MovieList;