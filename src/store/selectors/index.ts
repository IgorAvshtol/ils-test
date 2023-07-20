import { AppRootState } from '../store';

export const routeLoading = (state: AppRootState) => state.router.loading;
export const routeLoadingError = (state: AppRootState) => state.router.loadingError;
export const selectRoute = (state: AppRootState) => state.router.route;
export const requestListLoading = (state: AppRootState) => state.requestList.loading;
export const requestListLoadingError = (state: AppRootState) => state.requestList.loadingError;
export const selectListRequests = (state: AppRootState) => state.requestList.requests;
