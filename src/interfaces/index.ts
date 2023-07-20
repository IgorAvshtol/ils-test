export interface Route {
  start: string[];
  between: string[];
  finish: string[];
}

export interface Point {
  lat: number;
  lng: number;
}

export interface RouteReducerInitialState {
  loading: boolean;
  loadingError: boolean;
  route: any;
}

export interface RoutesListReducerInitialState {
  loading: boolean;
  loadingError: boolean;
  requests: any[];
}

export interface ResponseSaga {
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
