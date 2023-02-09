import GlobalStyle from "theme/globalStyles";
import ThemeProvider from "theme/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle/>
        <div>
          hello BedLand
        </div>
    </ThemeProvider>
  );
}

export default App;
