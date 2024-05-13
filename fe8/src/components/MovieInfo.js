import styled from 'styled-components';

function MovieInfo(){

    return(
        <MovieList>
            <MovieItem>
                <MovieTitle>Movie 2</MovieTitle>
                <Button>삭제</Button>
            </MovieItem>

            <hr></hr>

        </MovieList>

    )

}

const MovieList=styled.div`
    display: flex;
    flex-direction: column;
`

const MovieTitle=styled.div`
  font-size: 14px;
`
const MovieItem=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`
const Button=styled.button`
    padding: 2px;
    margin-left: 4px;
`


export default MovieInfo;