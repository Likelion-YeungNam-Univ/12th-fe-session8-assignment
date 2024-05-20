import React from "react";
import styled from 'styled-components';


function WatchedMvList({title, id, deleteWatchedMv}){
    return(
        <box>
            <p>{title}</p>
            <button onClick={()=>{deleteWatchedMv(id)}}>삭제</button>
        </box>
    );
}


const box = styled.div`

`;
export default WatchedMvList;