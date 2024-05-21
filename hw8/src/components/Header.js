import React, { useState, useEffect } from "react";
import Main from "./Main";



const Header=()=>{

    const[movies, setMovies]=useState([]);
    const[loading, setLoading] = useState(false);

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


    return(
        <div className="top">
            {loading? <Main movies={movies} setMovies={setMovies}/> :
            <wrapper>Movie List</wrapper>}
        </div>
    
    );    
};

// const header=styled.div`
// background-color: rgb(50, 50, 50);
// color:white;
// text-align: center;
// width: 100%;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

export default Header;