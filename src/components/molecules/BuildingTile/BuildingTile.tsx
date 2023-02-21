import {
  TileWrapper,
  BuildingImage,
  HeaderWrapper,
  SubtitleWrapper,
  ActionWrapper,
  Button,
} from './BuildingTile.styled';

interface BuildingTileProps {
  BuildingId: number;
  BuildingAddress: string;
  BuildingImg: string;
}

const BuildingTile = ({
  BuildingId,
  BuildingAddress,
  BuildingImg = 'assets/BuildingImg.png',
}: BuildingTileProps) => (
  <TileWrapper>
    <BuildingImage src={BuildingImg} alt='Building' />
    <HeaderWrapper>Building #{BuildingId}</HeaderWrapper>
    <SubtitleWrapper>{BuildingAddress}</SubtitleWrapper>
    <ActionWrapper>
      <Button>Open details</Button>
    </ActionWrapper>
  </TileWrapper>
);
export default BuildingTile;
