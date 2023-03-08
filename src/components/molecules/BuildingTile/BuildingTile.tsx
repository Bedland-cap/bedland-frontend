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
    <Styled.TileWrapper shadowColor={palette.shadow}>
      <Styled.BuildingImage src={buildingImg} alt='Building' />
      <Styled.CardContent>
        <Typography variant='cardTitle' color='inputGrey'>
          Building #{buildingId}
        </Typography>
        <Typography variant='paragraph' color='inputGrey'>
          {buildingAddress}
        </Typography>
        <Styled.ButtonWrapper>
          <Styled.Button palette={palette}>Open details</Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.CardContent>
    </Styled.TileWrapper>
  );
};

BuildingTile.defaultProps = defaultProps;

export default BuildingTile;
