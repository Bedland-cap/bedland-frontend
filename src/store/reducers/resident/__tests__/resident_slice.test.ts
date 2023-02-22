import { logout } from 'store/reducers/user_slice';
import {
  Resident,
  residentReducer,
  residentAdapter,
  addResident,
  updateResident,
  removeResident,
  setResidentList,
} from '../resident_slice';

const fakeResident: Resident = {
  id: 'fakeID',
  name: 'fakeName',
  surname: 'fakeSurname',
  flatId: 'fakeFlatId',
  isOwner: false,
};

describe('residentSlice', () => {
  it(`should reset resident data after ${logout}`, () => {
    const action = logout();
    const newState = residentReducer(residentAdapter.getInitialState(fakeResident), action);

    expect(newState.ids).toEqual([]);
    expect(newState.entities).toEqual({});
  });

  it(`should add resident when ${addResident}`, () => {
    const action = addResident(fakeResident);
    const newState = residentReducer(residentAdapter.getInitialState(), action);

    expect(newState.ids).toEqual(['fakeID']);
    expect(newState.entities).toEqual({ fakeID: fakeResident });
  });

  it(`should update resident when ${updateResident}`, () => {
    const addAction = addResident(fakeResident);
    const updatedResident: Resident = { ...fakeResident };
    updatedResident.name = 'updatedName';

    const action = updateResident({ id: 'fakeID', changes: updatedResident });
    const state = residentReducer(residentAdapter.getInitialState(fakeResident), addAction);
    const newState = residentReducer(state, action);

    expect(newState.entities).toEqual({ fakeID: updatedResident });
  });

  it(`should remove resident when ${removeResident}`, () => {
    const action = removeResident('fakeID');
    const state = residentReducer(residentAdapter.getInitialState(fakeResident), action);
    const newState = residentReducer(state, action);

    expect(newState.entities).toEqual({});
  });

  it(`should set resident list when ${setResidentList}`, () => {
    const action = addResident(fakeResident);
    const newState = residentReducer(residentAdapter.getInitialState(), action);

    expect(newState.ids).toEqual(['fakeID']);
    expect(newState.entities).toEqual({ fakeID: fakeResident });
  });
});
