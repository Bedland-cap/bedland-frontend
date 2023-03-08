import { Building } from 'store/reducers/building/building_slice';

const mockBuildingsList: Building[] = [
  {
    id: '1',
    name: 'Berry',
    address: 'Berry Street 21',
    managerId: '1',
    floors: '5',
  },
  {
    id: '2',
    name: 'Miedziana',
    address: 'Miedziana Street 3',
    managerId: '1',
    floors: '7',
  },
  {
    id: '3',
    name: 'Seaport',
    address: 'Seaport Avenue 51',
    managerId: '2',
    floors: '5',
  },
  {
    id: '4',
    name: 'Desert',
    address: 'Desert Street 2X',
    managerId: '1',
    floors: '6',
  },
  {
    id: '5',
    name: 'Lakewood',
    address: 'Lakewood Avenue 57',
    managerId: '3',
    floors: '10',
  },
];

export default mockBuildingsList;
