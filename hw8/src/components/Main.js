import React,{useState, useEffect} from "react";
import styled from "styled-components";


const Main=()=>
{
    const [movies, setMovies]=useState([]);
    const [watchedMovies, setWatchedMovies]=useState([]);
    const [willWatchMovies, setWillWatchMovies] = useState([]);
    const [loading, setLoading] = useState([]);

const fetchMovies = () => {
    const movies = [];

    // movies 배열 안에 객체 형태의 데이터 추가
    for (let i = 1; i <= 2500; i++) {
        movies.push({
        id: i,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
        });
        console.log("2500개의 영화 목록을 가져오는 중...");
    }

    // fetchMovies함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
    alert("데이터를 가져오는 중입니다...");

    return movies;
    };

useEffect(() => {
const fetchData = async () => {
    const moviesInfo = fetchMovies();
    setMovies(moviesInfo);
    setLoading(false);
};

fetchData();
}, []);

const addWatchedMv = (id)=>{
    const newMvList= movies.filter(movie=>movie.id!==id);
    const newWatchedMvList=movies.filter(movie=>movie.id===id);

    setMovies(newMvList);
    setWatchedMovies((watchedMovies)=>[...watchedMovies, newWatchedMvList]);
};

const addWillWatchMv=(id)=>{
    const newMvList= movies.filter(movie=>movie.id!==id);
    const newWillWatchMvList=movies.filter(movie=>movie.id===id);

    setMovies(newMvList);
    setWillWatchMovies((willWatchMovies)=>[...willWatchMovies, newWillWatchMvList])
;}


const MovieList=({title, id, addWatchedMv, addWillWatchMv})=>{
    return(
        <box>
            <p>{title}</p>
            <p>Description for Movie{id}</p>
            <button onClick={()=>addWatchedMv}>봤는 영화 담기</button>
            <button onClick={()=>addWillWatchMv}>볼 영화 담기</button>
        </box>
    );
}
};


const box = styled.div`

`;

export default Main;