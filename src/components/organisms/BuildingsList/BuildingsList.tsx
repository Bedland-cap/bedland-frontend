import BuildingTile from 'components/molecules/BuildingTile/BuildingTile';
import mockBuildingsList from 'utils/mockBuildingsList';
import * as Styled from './BuildingsList.styled';

const BuildingsList = () => (
  <Styled.BuildingsContainer>
    {mockBuildingsList.map((building) => (
      <BuildingTile
        key={`building-${building.id}`}
        buildingId={building.id}
        buildingAddress={building.address}
      />
    ))}
  </Styled.BuildingsContainer>
);

export default BuildingsList;
