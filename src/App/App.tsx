import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Header from 'components/organisms/Header/Header';
import MainBody from 'components/templates/MainBody/MainBody';
import GlobalStyle from 'theme/globalStyles';
import Footer from 'components/organisms/Footer/Footer';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user_slice';
import GlobalFontsStyle from 'assets/fonts/fonts';
import { RoutesForLoggedIn, RoutesForNotLoggedIn } from './routing/routing';

const App = () => {
  const isLoggedIn = useAppSelector(selectUserIsLoggedIn);
  return (
    <>
      <GlobalStyle />
      <GlobalFontsStyle />
      <Header />
      <MainBody>
        {isLoggedIn ? <Sidebar /> : null}
        {isLoggedIn ? <RoutesForLoggedIn /> : <RoutesForNotLoggedIn />}
      </MainBody>
      {isLoggedIn ? null : <Footer />}
    </>
  );
};
export default App;
