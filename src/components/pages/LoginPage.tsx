import { ChildBox } from "theme/LoginPage.styled";
import { PageI } from "utils/interfaces/PageI";

export const LoginPage = (props: PageI) => {
  return (
    <ChildBox theme={{ color: `#f5f6f8` }}>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => props?.changePage()}
      >
        Click me
      </button>
    </ChildBox>
  );
};
