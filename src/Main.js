import React, { useState } from 'react'
import styled from 'styled-components'

const Main = ({movieList, setMovieList}) => {

    const Wrapper = styled.div`
        display : flex;
    `;

    const [watchedMovieList, setWatchedMovieList] = useState([]);
    const [toWatchMovieList, setToWatchMovieList] = useState([]);

    return (
        <Wrapper>
            <WatchedMovieList watchedMovieList={watchedMovieList} setWatchedMovieList={setWatchedMovieList} setMovieList={setMovieList}></WatchedMovieList>
            <MovieList movieList={movieList} setWatchedMovieList={setWatchedMovieList} setToWatchMovieList={setToWatchMovieList} setMovieList={setMovieList}></MovieList>
            <ToWatchMovieList toWatchMovieList={toWatchMovieList} setToWatchMovieList={setToWatchMovieList} setMovieList={setMovieList}></ToWatchMovieList>
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

const SelectedMovie = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 5px;
`;


const WatchedMovieList = ({watchedMovieList, setWatchedMovieList, setMovieList}) => {

    const deleteMovie = (movie) => {
        setWatchedMovieList(watchedMovieList.filter(el => el !== movie));

        setMovieList(prev => [...prev, movie].sort((a,b)=> a.id - b.id));
    }

    return (
        <SelectedMovieList>
            <h2>봤는 영화 목록</h2>
            <div>
                {watchedMovieList.map(el => {
                    return (
                        <SelectedMovie>
                            {el.title}
                            <button onClick={() => deleteMovie(el)}>삭제</button>
                        </SelectedMovie>
                    )
                })}
            </div>
        </SelectedMovieList>
    )
}

const ToWatchMovieList = ({toWatchMovieList, setToWatchMovieList, setMovieList}) => {

    const deleteMovie = (movie) => {
        setToWatchMovieList(toWatchMovieList.filter(el => el !== movie));

        setMovieList(prev => [...prev, movie].sort((a,b)=> a.id - b.id));
    }

    return (
        <SelectedMovieList>
            <h2>볼 영화 목록</h2>
            <div>
                {toWatchMovieList.map(el => {
                    return (
                        <SelectedMovie>
                            {el.title}
                            <button onClick={() => deleteMovie(el)}>삭제</button>
                        </SelectedMovie>
                    )
                })}
            </div>
        </SelectedMovieList>
    )
}

const MovieList = ({movieList, setWatchedMovieList, setToWatchMovieList, setMovieList}) => {
    
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
        setMovieList(movieList.filter(el => el !== item));

        setWatchedMovieList(prev => [...prev, item]);
    }

    const addToWatchMovie = (item) => {
        setMovieList(movieList.filter(el => el !== item));

        setToWatchMovieList(prev => [...prev, item]);
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