import { PropsWithChildren, useContext } from 'react';
import Footer from 'components/molecules/Footer/Footer';
import Header from 'components/molecules/Header/Header';
import {
  MainBodyBox,
  ChildBox,
} from 'components/templates/MainBody/MainBody.styled';
import { ThemeContext } from 'theme/ThemeContext';

type MainBody = {
  variant: 'resident' | 'manager';
  logged: boolean;
  children: React.ReactNode;
};

const MainBody = ({
  children,
  logged = false,
  variant = 'resident',
}: PropsWithChildren<MainBody>) => {
  const { palette } = useContext(ThemeContext);
  return (
    <MainBodyBox>
      <Header variant={variant} logged={logged} />
      <ChildBox backgroundColor={palette.backgroundLogin}>{children}</ChildBox>
      <Footer backgroundColor={palette.footer} />
    </MainBodyBox>
  );
};

export default MainBody;
