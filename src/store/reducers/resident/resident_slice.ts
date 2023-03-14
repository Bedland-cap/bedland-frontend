import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

export type Resident = {
  id: string;
  name: string;
  surname: string;
  flatId: string;
  isOwner: boolean;
};

export const residentAdapter = createEntityAdapter<Resident>({
  selectId: (resident) => resident.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const ResidentSlice = createSlice({
  name: 'resident',
  initialState: residentAdapter.getInitialState(),
  reducers: {
    addResident: residentAdapter.addOne,
    updateResident: residentAdapter.updateOne,
    removeResident: residentAdapter.removeOne,
    setResidentList: residentAdapter.setAll, // to remove, when we set api and extra reducer for set ResidentList
  },
  extraReducers: (/* builder */) => {
    // --->> add reducer for response from API
    // builder.addMatcher(userApi.endpoints.getAllResidentList.matchFulfilled, (residentAdapter.setAll);
    // builder.addMatcher(userApi.endpoints.getAllResidentListByBuildingId.matchFulfilled, (residentAdapter.setAll);
    //
    // builder.addCase(logout, residentAdapter.removeAll);
  },
});

export const { addResident, updateResident, removeResident, setResidentList } =
  ResidentSlice.actions;
export const residentReducer = ResidentSlice.reducer;

export const selectResidentList = (state: RootState) => state.resident;
