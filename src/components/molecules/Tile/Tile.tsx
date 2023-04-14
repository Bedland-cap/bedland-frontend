import Button from 'components/atoms/Button/Button';
import Typography from 'components/atoms/Typography/Typography';
import { useAppSelector } from 'store/hooks';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';

import * as Styled from './Tile.styled';
import { TileProps, tileDefaultProps } from './Tiles.types';

const Tile = ({ id, address, img }: TileProps) => {
  const { palette } = useContext(ThemeContext);
  const userRole = useAppSelector((state) => state.user.role);

  return (
    <Styled.TileWrapper palette={palette}>
      <Styled.BuildingImage src={img} alt={userRole === 'manager' ? 'building' : 'flat'} />
      <Styled.CardContent>
        <Typography variant='header3' color='inputGrey'>
          {userRole === 'manager' ? 'Building' : 'Flat'}#{id}
        </Typography>
        <Typography variant='paragraph' color='inputGrey'>
          {address}
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

Tile.defaultProps = tileDefaultProps;

export default Tile;
