import { useContext } from 'react';
import Footer from 'components/molecules/Footer/Footer';
import Header from 'components/molecules/Header/Header';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import {
  MainBodyBox,
  ChildBox,
} from 'components/templates/MainBody/MainBody.styled';
import { ThemeContext } from 'theme/ThemeContext';
import { MainBodyI } from 'utils/interfaces/MainBodyI';

const MainBody = ({
  children,
  logged = false,
  variant = 'resident',
}: MainBodyI) => {
  const { palette } = useContext(ThemeContext);
  return (
    <MainBodyBox>
      <Header variant={variant} logged={logged} />
      <ChildBox backgroundColor={palette.backgroundLogin}>
        {logged && <MenuBar />}
        {children}
      </ChildBox>
      <Footer backgroundColor={palette.footer} />
    </MainBodyBox>
  );
};

export default MainBody;
