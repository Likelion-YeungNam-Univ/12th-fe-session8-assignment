import styled from 'styled-components';

function MovieInfo({title, id, deleteMovie}){

    return(
        <MovieList>
            <MovieItem>
                {/* 영화 제목과 삭제버튼 */}
                <MovieTitle>{title}</MovieTitle>
                <Button onClick={() => {deleteMovie(id)}}>삭제</Button>
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
  padding: 8px 0;
`
const Button=styled.button`
    padding: 2px;
    margin-left: 4px;
`

export default MovieInfo;