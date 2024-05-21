import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WatchedMvList from "./components/WatchedMvList";
import WillWatchMvList from "./components/WillWatchMvList";
import styled from "styled-components";


function App(){
  return(
      <div>
          <Header />
          <Footer/>
          <Main/>
          <WatchedMvList/>
          <WillWatchMvList/>

      </div>

  );
}

export default App;