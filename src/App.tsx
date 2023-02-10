import { Header } from "components/molecules/Header";
import { ScreenChoose } from "components/organisms/ScreenChoose";
import { useState } from "react";
import { MainBodyBox, MainBox } from "theme/Main.styled";
import GlobalStyle from "theme/globalStyles";
import ThemeProvider from "theme/ThemeContext";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <ThemeProvider>
      <GlobalStyle/>
    <MainBodyBox>
      <nav>
        <Header variant={isMenu} />
      </nav>
      <MainBox>
        <ScreenChoose isMenu={isMenu} setIsMenu={setIsMenu} />
      </MainBox>
    </MainBodyBox>
    </ThemeProvider>
  );
}

export default App;
