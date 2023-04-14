import { useAppSelector } from 'store/hooks';
import Tile from 'components/molecules/Tile/Tile';
import AddAnotherTile from 'components/molecules/Tile/AddAnotherTile';
import mockBuildingsList from 'utils/mock/mockBuildingsList';
import { mockflatListWithAddress } from 'utils/mock/mockFlatsList';
import { Building, FlatWithAddress } from 'types/shared.types';
import * as Styled from './DisplayList.styled';

type DisplayItem = Building | FlatWithAddress;

const DisplayList = () => {
  const userRole = useAppSelector((state) => state.user.role);
  // const userId = useAppSelector((state)=> state.user.userId);
  const keyAttribute = userRole === 'manager' ? 'building' : 'flat';
  const list = userRole === 'manager' ? mockBuildingsList : mockflatListWithAddress;

  // remove slice after introducing filtering
  const mockedList = list.slice(0, 3);

  return (
    <Styled.DisplayContainer>
      {mockedList.map((listItem: DisplayItem) => (
        <Tile key={`${keyAttribute}-${listItem.id}`} id={listItem.id} address={listItem.address} />
      ))}
      {mockedList.length < 5 && <AddAnotherTile />}
    </Styled.DisplayContainer>
  );
};

export default DisplayList;
