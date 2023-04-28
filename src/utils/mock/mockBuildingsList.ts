import { Building, BuildingData } from 'types/shared.types';

const mockBuildingsList: Building[] = [
  {
    id: '1',
    version: 0,
    createDate: '2023-02-13T00:00:00',
    updateDate: '2023-02-14T00:00:00',
    managerId: '1',
    name: 'Business Garden Wrocław',
    address: 'ul. Legnicka 48H, 54-202 Wrocław',
    floors: '6',
  },
  {
    id: '2',
    version: 0,
    createDate: '2023-02-15T00:00:00',
    updateDate: '2023-02-14T00:00:00',
    managerId: '2',
    name: 'Business Garden Poznań',
    address: 'ul. Kolorowa 6, 60-198 Poznań',
    floors: '16',
  },
  {
    id: '3',
    version: 0,
    createDate: '2023-02-11T00:00:00',
    updateDate: '2023-02-14T00:00:00',
    managerId: '3',
    name: 'Business Park',
    address: 'ul. Lublańska 38, 31-476 Kraków',
    floors: '4',
  },
  {
    id: '4',
    version: 0,
    createDate: '2023-02-17T00:00:00',
    updateDate: '2023-02-14T00:00:00',
    managerId: '4',
    name: 'Business Garden',
    address: 'ul. Wrocławska 152A, 45-835 Opole',
    floors: '15',
  },
  {
    id: '5',
    version: 0,
    createDate: '2023-02-14T00:00:00',
    updateDate: '2023-02-14T00:00:00',
    managerId: '1',
    name: 'Business Garden Warszawa',
    address: 'ul. Żwirki i Wigury 16a, 02-092 Warszawa',
    floors: '2',
  },
];

export const mockBuildingDataList: BuildingData[] = [
  {
    buildingName: 'Miedziana Street 3',
    flatNumber: '1a',
    flatFloor: 1,
    flatId: '1b',
    'ownerName+lastname': 'Mareczek BioreBoMoge',
    ownerPhone: 111111111,
    ownerId: '1c',
  },
  {
    buildingName: 'Miedziana Street 3',
    flatNumber: '8a',
    flatFloor: 8,
    flatId: '8b',
    'ownerName+lastname': 'Urlo Kalinka',
    ownerPhone: 111112111,
    ownerId: '8c',
  },
  {
    buildingName: 'Seaport Avenue 51',
    flatNumber: '6a',
    flatFloor: 6,
    flatId: '6b',
    'ownerName+lastname': 'Mareczek InnyNizTenDrugi',
    ownerPhone: 222222222,
    ownerId: '6c',
  },
  {
    buildingName: 'Desert Street 2X',
    flatNumber: '14a',
    flatFloor: 14,
    flatId: '14b',
    'ownerName+lastname': 'Mareczek TrzeciMarekWtf',
    ownerPhone: 333333333,
    ownerId: '14c',
  },
  {
    buildingName: 'Desert Street 2X',
    flatNumber: '17a',
    flatFloor: 17,
    flatId: '17b',
    'ownerName+lastname': 'Jakub Nareszcie',
    ownerPhone: 444444444,
    ownerId: '17c',
  },
  {
    buildingName: 'Lakewood Avenue 77',
    flatNumber: '12a',
    flatFloor: 12,
    flatId: '12b',
    'ownerName+lastname': 'Jakub Mareczek',
    ownerPhone: 555555555,
    ownerId: '12c',
  },
  {
    buildingName: 'Berry Street 27',
    flatNumber: '7a',
    flatFloor: 7,
    flatId: '7b',
    'ownerName+lastname': 'Nie ZnamImion',
    ownerPhone: 666666666,
    ownerId: '7c',
  },
];

export default mockBuildingsList;
