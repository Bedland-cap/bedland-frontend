import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';
import { FOOTER_HEIGHT } from 'utils/constans';

const FooterBox = styled.div<Palette>`
  align-items: center;
  background-color: ${({ palette }) => palette.footer};
  display: flex;
  height: ${FOOTER_HEIGHT}px;
  justify-content: center;
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
