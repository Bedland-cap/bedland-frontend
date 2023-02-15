import GlobalStyle from 'theme/globalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from 'components/pages/DashboardPage';
import Header from 'components/molecules/Header/Header';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import LoginPage from 'components/pages/LoginPage';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage changePage={() => null} />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage changePage={() => null} />,
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <Header variant={false} />
    <Container>
      <MenuBar />
      <RouterProvider
        router={router}
        fallbackElement={<section>Space for spinner</section>}
      />
    </Container>
  </>
);

export default App;
