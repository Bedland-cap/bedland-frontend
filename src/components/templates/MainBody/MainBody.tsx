import Header from 'components/molecules/Header/Header';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import {
  MainBodyBox,
  MainBox,
  MainChildBox,
} from 'components/templates/MainBody/Main.styled';
import { PropsWithChildren } from 'react';
import { MainBodyI } from 'utils/interfaces/MainBodyI';

const MainBody = (props: PropsWithChildren<MainBodyI>) => (
  <MainBodyBox>
    <Header variant={props?.value} />
    <MainBox>
      <MainChildBox>
        {props?.menu ? <MenuBar /> : null}
        {props?.children}
      </MainChildBox>
    </MainBox>
  </MainBodyBox>
);

export default MainBody;
