import mockFlatsList from 'utils/mock/mockFlatsList';
import { flatReducer, removeAllFlats, flatAdapter } from './flat_slice';

describe('flatSlice', () => {
  it(`should remove all flats when ${removeAllFlats}`, () => {
    const action = removeAllFlats();
    const state = flatReducer(flatAdapter.getInitialState(mockFlatsList[0]), action);

    const newState = flatReducer(state, action);
    expect(newState.entities).toEqual({});
  });
});
