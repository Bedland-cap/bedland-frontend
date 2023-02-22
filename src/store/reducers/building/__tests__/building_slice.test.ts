import { logout } from 'store/reducers/user_slice';
import {
  buildingReducer,
  buildingAdapter,
  addBuilding,
  updateBuilding,
  Building,
  setBuildingList,
} from '../building_slice';

describe('buildingSlice', () => {
  const fakeBuilding = {
    id: 'fakeID',
    name: 'fakeName',
    address: 'fakeAddress',
    managerId: 'fakeManagerID',
    floors: 'fakeFloors',
  };

  const initialState = buildingAdapter.getInitialState({
    ids: ['fakeID'],
    entities: {
      fakeID: fakeBuilding,
    },
  });

  it(`should reset building data after ${logout}`, () => {
    const action = logout();
    const newState = buildingReducer(buildingAdapter.getInitialState(), action);

    expect(newState.ids).toEqual([]);
    expect(newState.entities).toEqual({});
  });

  it(`should update building list state when ${addBuilding}`, () => {
    const action = addBuilding(fakeBuilding);
    const newState = buildingReducer(buildingAdapter.getInitialState(), action);

    expect(newState.ids).toEqual(['fakeID']);
    expect(newState.entities).toEqual({ fakeID: fakeBuilding });
  });

  it(`should update building when ${updateBuilding}`, () => {
    const updatedBuilding: Building = { ...fakeBuilding };
    updatedBuilding.name = 'updatedName';

    const action = updateBuilding({ id: 'fakeID', changes: updatedBuilding });
    const newState = buildingReducer(
      buildingAdapter.getInitialState(initialState),
      action,
    );

    expect(newState.entities).toEqual({ fakeID: updatedBuilding });
  });

  it(`should set building list when ${setBuildingList}`, () => {
    const updatedBuilding: Building = { ...fakeBuilding };
    updatedBuilding.name = 'updatedName';
    updatedBuilding.id = 'updatedID';
    const action = setBuildingList([fakeBuilding, updatedBuilding]);
    const newState = buildingReducer(buildingAdapter.getInitialState(), action);

    expect(newState.ids).toEqual(['fakeID', 'updatedID']);
    expect(newState.entities).toEqual({
      fakeID: fakeBuilding,
      updatedID: updatedBuilding,
    });
  });
});
