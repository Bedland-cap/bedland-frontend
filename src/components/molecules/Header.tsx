import { HeaderBox, Logo } from "theme/Header.styled";
import { HeaderI } from "utils/interfaces/HeaderI";

export const Header = (props: HeaderI) => {
  const { variant } = props;
  return (
    <HeaderBox theme={{ variant }}>
      <Logo src={require("assets/Logo.png")} theme={{ variant }} />
    </HeaderBox>
  );
};
