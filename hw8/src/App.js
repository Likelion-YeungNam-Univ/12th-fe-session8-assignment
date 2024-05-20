import React from "react";
import HeaderFooter from "./components/HeaderFooter";
import Main from "./components/Main";
import WatchedMvList from "./components/WatchedMvList";
import WillWatchMvList from "./components/WillWatchMvList";
import styled from "styled-components";


function App(){
  return(
      <div>
          <HeaderFooter />
          <Main/>
          <WatchedMvList/>
          <WillWatchMvList/>

      </div>

  );
}

export default App;