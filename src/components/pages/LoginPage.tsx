import { useNavigate } from "react-router-dom";
import { ChildBox } from "components/pages/Page.styled";
import { PageI } from "utils/interfaces/PageI";

export const LoginPage = (props: PageI) => {
  const nav = useNavigate();

  return (
    <ChildBox theme={{ color: `#131f3e` }}>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => nav("/dashboard")}
      >
        Click me
      </button>
    </ChildBox>
  );
};
