import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Header from 'components/organisms/Header/Header';
import MainBody from 'components/templates/MainBody/MainBody';
import GlobalStyle from 'theme/globalStyles';
import Footer from 'components/organisms/Footer/Footer';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user_slice';
import styled from 'styled-components';
import { RoutesForLoggedIn, RoutesForNotLoggedIn } from './routing';

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  const isLoggedIn = useAppSelector(selectUserIsLoggedIn);
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <MainBody>
        {isLoggedIn ? <Sidebar /> : null}
        {isLoggedIn ? <RoutesForLoggedIn /> : <RoutesForNotLoggedIn />}
      </MainBody>
      <Footer />
    </Container>
  );
};
export default App;
