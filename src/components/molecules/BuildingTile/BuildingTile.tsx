import Button from 'components/atoms/Button/Button';
import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import BuildingImg from 'assets/img/BuildingImg.png';
import * as Styled from './BuildingTile.styled';

export type BuildingTileProps = {
  buildingId: string;
  buildingAddress: string;
  buildingImg?: string;
};

const defaultProps: { buildingImg: string } = {
  buildingImg: BuildingImg,
};

const BuildingTile = ({ buildingId, buildingAddress, buildingImg }: BuildingTileProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.TileWrapper shadowColor={palette.widgetsShadows}>
      <Styled.BuildingImage src={buildingImg} alt='Building' />
      <Styled.CardContent>
        <Typography variant='header3' color='inputGrey'>
          Building #{buildingId}
        </Typography>
        <Typography variant='paragraph' color='inputGrey'>
          {buildingAddress}
        </Typography>
        <Button wrapper marginTop={1}>
          <Button variant='primary' color='blue'>
            Open details
          </Button>
        </Button>
      </Styled.CardContent>
    </Styled.TileWrapper>
  );
};

BuildingTile.defaultProps = defaultProps;

export default BuildingTile;
