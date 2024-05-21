import React,{useState, useEffect} from "react";
import styled from "styled-components";


const Main=()=>
{
    const [movies, setMovies]=useState([]);
    const [willWatchMovies, setWillWatchMovies] = useState([]);



    const WillWatchMvList=({title,id,deleteWillWatchMv})=>{

        function deleteWillWatchMv({movies, setMovies})
           { setWillWatchMovies(willWatchMovies.filter(el=>el!==movies));
            setMovies(prev=>[...prev, movies].sort((a,b)=>a.id-b.id));
        }
        return(
            <box>
                <h2>볼 영화 목록</h2>
                <p>{title}</p>
                <div>
                    {WillWatchMvList.map(el=>{
                        return(
                            <box>
                                <button onClick={()=>deleteWillWatchMv(el)}>삭제</button>
                            </box>
                        )
                    })}
                </div>  
            </box>
        );
    }
    
    const box = styled.div``;

    
    const watchedMvList=({title, id,DeleteWatchedMv})=>{
       

        function DeleteWatchedMv({movies, setMovies})
        {
            const [watchedMovies, setWatchedMovies]=useState([]);
            setWatchedMovies(watchedMovies.filter(el=>el!==movies));
            setMovies(prev=>[...prev, movies].sort((a,b)=>a.id-b.id));
        }
        return(
            <box>
                <h2>봤는 영화 목록</h2>
                <p>{title}</p>
                <div>
                    {watchedMvList.map(el=>{
                        return(
                        <box>
                            <button onClick={()=>{DeleteWatchedMv(id)}}>삭제</button>
                        </box>
                        )
                    })}
                    
                </div>
            </box>
        );
    }
    
    
// const box = styled.div`

// `;



const MovieList=({title, id})=>{

    const addWatchedMv = (id)=>{
        const newMvList= movies.filter(movie=>movie.id!==id);
        const newWatchedMvList=movies.filter(movie=>movie.id===id);
    
        setMovies(newMvList);
        setWillWatchMovies((watchedMovies)=>[...watchedMovies, newWatchedMvList]);
    };
    
    const addWillWatchMv=(id)=>{
        const newMvList= movies.filter(movie=>movie.id!==id);
        const newWillWatchMvList=movies.filter(movie=>movie.id===id);
    
        setMovies(newMvList);
        setWillWatchMovies((willWatchMovies)=>[...willWatchMovies, newWillWatchMvList])
    ;}

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



// const box = styled.div`
// display: flex;
// flex-direction: column;
// height: 100vh;
// overflow-y: scroll;
// `;

export default Main;