import styled from 'styled-components';
import MovieInfo from './MovieInfo';


function SelectedMovies({title}){

    return(
        <SideContainer>
            <Title>{title}</Title>

            <MovieInfo></MovieInfo>
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