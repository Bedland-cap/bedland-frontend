import { Header } from "components/molecules/Header/Header";
import { MenuBar } from "components/organisms/MenuBar/MenuBar";
import {
  MainBodyBox,
  MainBox,
  MainChildBox,
} from "components/templates/MainBody/Main.styled";
import { MainBodyI } from "utils/interfaces/MainBodyI";

export const MainBody = (props: MainBodyI) => {
  return (
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
};
