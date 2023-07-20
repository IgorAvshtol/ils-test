import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouteReducerInitialState } from 'interfaces';

const initialState: RouteReducerInitialState = {
  loading: false,
  loadingError: false,
  route: null,
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRouteSuccess(state, action: PayloadAction<any>) {
      state.route = action.payload;
      state.loading = false;
    },
    fetchRouteFailed(state) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

export const routerActions = routerSlice.actions;

const routerReducer = routerSlice.reducer;
export default routerReducer;
