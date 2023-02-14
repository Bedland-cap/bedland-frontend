import { useNavigate } from "react-router-dom";
import { ChildBox } from "components/pages/Page.styled";
import { PageI } from "utils/interfaces/PageI";

export const DashboardPage = (props: PageI) => {
  const nav = useNavigate();

  return (
    <ChildBox theme={{ color: `#f5f6f8` }}>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => nav("/")}
      >
        Click me
      </button>
    </ChildBox>
  );
};
