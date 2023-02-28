import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { logout } from 'store/reducers/user_slice';
import type { RootState } from 'store/store';

export type Building = {
  id: string;
  name: string;
  address: string;
  managerId: string;
  floors: string;
};

export const buildingAdapter = createEntityAdapter<Building>({
  selectId: (building) => building.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const BuildingSlice = createSlice({
  name: 'building',
  initialState: buildingAdapter.getInitialState(),
  reducers: {
    addBuilding: buildingAdapter.addOne,
    updateBuilding: buildingAdapter.updateOne,
    setBuildingList: buildingAdapter.setAll,
  },
  extraReducers: (builder) => {
    // --->> add reducer for response from API
    // builder.addMatcher(userApi.endpoints.getAllBuildingByManagerId.matchFulfilled, buildingAdapter.setAll);
    //
    builder.addCase(logout, buildingAdapter.removeAll);
  },
});

export const { addBuilding, updateBuilding, setBuildingList } = BuildingSlice.actions;
export const buildingReducer = BuildingSlice.reducer;

export const selectBuildingList = (state: RootState) => state.building.entities;
