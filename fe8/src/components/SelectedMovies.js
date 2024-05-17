import styled from 'styled-components';
import MovieInfo from './MovieInfo';


function SelectedMovies({title, watchedMv=[], deleteMovie}){

    return(
        <SideContainer>
            <Title>{title}</Title>
            {console.log(watchedMv)}

            {watchedMv.length === 0 ? (
              <p>목록이 비어있습니다.</p>
            ) :(
              watchedMv.map((movie)=>
                {
                  return(
                    <MovieInfo key={movie.id} id={movie.id} title={movie.title} deleteMovie={deleteMovie}></MovieInfo>
                  )
                })
            )}
            
        </SideContainer>
    )
}


// 양쪽 섹션
const SideContainer=styled.div`
  flex: 2;
  background-color: #f2f2f2;
  /* height: 100%; */
  text-align: center;
  /* overflow-y: scroll; */

`

const Title=styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0;
`

export default SelectedMovies;