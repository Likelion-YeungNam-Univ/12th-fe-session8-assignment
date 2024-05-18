import React, { useState } from 'react'
import styled from 'styled-components'

const Main = ({movieList}) => {

    const Wrapper = styled.div`
        display : flex;
    `;

const [watchedMovieList, setWatchedMovieList] = useState([]);
const [toWatchMovieList, setToWatchMovieList] = useState([]);

  return (
    <Wrapper>
        <WatchedMovieList></WatchedMovieList>
        <MovieList movieList={movieList}></MovieList>
        <ToWatchMovieList></ToWatchMovieList>
    </Wrapper>
  )
}

const SelectedMovieList = styled.div`
width : 20%;
height : 500px;
background-color : #f1f1f1;
text-align : center;
box-sizing : border-box;
padding : 15px;
margin : 15px 0;
`;

const WatchedMovieList = () => {
    return (
        <SelectedMovieList>
            <h2>봤는 영화 목록</h2>
            <div className='watchedMovieList'></div>
        </SelectedMovieList>
    )
}

const ToWatchMovieList = () => {
    return (
        <SelectedMovieList>
            <h2>볼 영화 목록</h2>
            <div className='toWatchMovieList'></div>
        </SelectedMovieList>
    )
}

const MovieList = ({movieList}) => {
    

    
    const Wrapper = styled.div`
        width : 60%;
        height : 500px;
        overflow-y : auto;
    `;

    const Movie = styled.div`
        height : 100px;
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        text-align : center;

        border-bottom : 3px solid #f0f0f0;
    `;

    const addWatchedMovie = (item) => {

    }

    const addToWatchMovie = (item) => {

    }

    return (
        <Wrapper>
            <div className='movieList'>
                {movieList.map(item => {
                    return (
                        <Movie className='movie'>
                            {item.title}
                            <br/>
                            {item.description}
                            <br/>
                            <div>
                                <button onClick={()=> addWatchedMovie(item)}>봤는 영화 담기</button>
                                <button onClick={()=> addToWatchMovie(item)}>볼 영화 담기</button>
                            </div>
                        </Movie>
                    )
                })}
            </div>
        </Wrapper>
    )
}


export default Main