import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { flatApi } from 'services/flat/flatApi';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';
import { Flat } from 'types/shared.types';

export const flatAdapter = createEntityAdapter<Flat>({
  selectId: (flat) => +flat.flatNumber,
  sortComparer: (a, b) => a.owner.localeCompare(b.owner),
});

export const FlatSlice = createSlice({
  name: 'flat',
  initialState: flatAdapter.getInitialState(),
  reducers: {
    removeAllFlats: flatAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      flatApi.endpoints.getAllFlatsForBuilding.matchFulfilled,
      (state, { payload }) => {
        flatAdapter.setAll(
          state,
          payload.map((inputFlat: Flat) => {
            const flat: Flat = {
              flatNumber: inputFlat.flatNumber,
              floor: inputFlat.floor,
              owner: inputFlat.owner,
              residents: inputFlat.residents,
              monthlyPayments: inputFlat.monthlyPayments,
              lastMaintenance: inputFlat.lastMaintenance,
            };
            return flat;
          }),
        );
      },
    );
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, flatAdapter.removeAll);
  },
});

export const { removeAllFlats } = FlatSlice.actions;

export const flatReducer = FlatSlice.reducer;

export const selectFlatsList = (state: RootState) => state.flat;
