import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";

function App() {
  return (
    <Box>
      <Header />
      <Center />
      <Footer />
    </Box>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
