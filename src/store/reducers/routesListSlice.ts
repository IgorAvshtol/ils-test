import { createSlice } from '@reduxjs/toolkit';
import { RoutesListReducerInitialState } from 'interfaces';

const initialState: RoutesListReducerInitialState = {
  loading: true,
  loadingError: false,
  requests: [],
};

const routesListSlice = createSlice({
  name: 'routesList',
  initialState,
  reducers: {
    fetchRequestList(state) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRequestListSuccess(state, action) {
      state.requests = action.payload;
      state.loading = false;
    },
    fetchRequestListFailed(state) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

export const requestListActions = routesListSlice.actions;

const serviceListReducer = routesListSlice.reducer;
export default serviceListReducer;
