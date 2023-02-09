import { ChildBox } from "theme/LoginPage.styled";
import { PageI } from "utils/interfaces/PageI";

export const MainPage = (props: PageI) => {
  return (
    <ChildBox theme={{ color: `#131f3e` }}>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => props?.changePage()}
      >
        Click me
      </button>
    </ChildBox>
  );
};
