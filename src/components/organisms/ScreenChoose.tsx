import { LoginPage } from "components/pages/LoginPage";
import { MainPage } from "components/pages/MainPage";
import { MainChildBox } from "theme/Main.styled";
import { ScreenChooseTemporaryI } from "utils/interfaces/ScreenChooseI";
import { MenuBar } from "./MenuBar";

export const ScreenChoose = (props: ScreenChooseTemporaryI) => {
  return (
    <MainChildBox>
      {props?.isMenu ? (
        <>
          <MenuBar />
          <LoginPage changePage={() => props.setIsMenu(false)} />
        </>
      ) : (
        <MainPage changePage={() => props.setIsMenu(true)} />
      )}
    </MainChildBox>
  );
};
