import React from "react";
import styled from 'styled-components';

function WatchedMvList({title, id, deleteMv}){
    return(
        <div>
            <p>{title}</p>
            <button onClick={()=>{deleteMv(id)}}>삭제</button>
        </div>
    );
}

export default WatchedMvList;