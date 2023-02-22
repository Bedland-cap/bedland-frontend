import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';

const FooterBox = styled.div<Palette>`
  align-items: center;
  background-color: ${({ palette }) => palette.footer};
  display: flex;
  justify-content: center;
  min-height: 52px;
  width: 100vw;
`;

const Footer = () => {
  const { palette } = useContext(ThemeContext);
  return (
    <FooterBox palette={palette}>
      <Typography variant='caption' color='light' style={{ fontWeight: 600 }}>
        ©BedLand 2023
      </Typography>
    </FooterBox>
  );
};

export default Footer;
