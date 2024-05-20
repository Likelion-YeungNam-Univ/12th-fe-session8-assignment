import "./App.css";
import styled from "styled-components";
import MainContent from "./MainContent";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  height: 120px;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 120px;
`;
const HeaderFooterText = styled.h1`
  color: white;
  font-size: 50px;
  justify-content: center;
  align-self: center;
`;
function App() {
  return (
    <Container>
      <ContentContainer>
        <Header>
          <HeaderFooterText>Movie List</HeaderFooterText>
        </Header>
        <MainContent></MainContent>
      </ContentContainer>
      <Footer>
        <HeaderFooterText>Footer</HeaderFooterText>
      </Footer>
    </Container>
  );
}

export default App;
