import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <Header />
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
