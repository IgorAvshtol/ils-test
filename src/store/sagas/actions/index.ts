import { createAction } from '@reduxjs/toolkit';
import { Route } from 'interfaces';
import { SagaActions } from '../types';

export const getRoute = createAction<Route>(SagaActions.GET_ROUTE);
export const getRoutes = createAction(SagaActions.GET_ROUTES);
