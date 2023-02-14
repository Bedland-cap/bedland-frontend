import GlobalStyle from "theme/globalStyles";
import ThemeProvider from "theme/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainBody } from "components/templates/MainBody/MainBody";
import { LoginPage } from "components/pages/LoginPage";
import { DashboardPage } from "components/pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainBody value={true}>
        <LoginPage />
      </MainBody>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <MainBody value={false} menu>
        <DashboardPage />
      </MainBody>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider
        router={router}
        fallbackElement={<section>Space for spinner</section>}
      />
    </ThemeProvider>
  );
}

export default App;
