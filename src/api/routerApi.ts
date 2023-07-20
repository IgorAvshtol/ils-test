import { Route } from '../interfaces';

const routerApi = {
  getRoute(routeObject: Route) {
    const start = [...routeObject.start].reverse().join(',');
    const between = [...routeObject.between].reverse().join(',');
    const finish = [...routeObject.finish].reverse().join(',');
    return fetch(
      `${process.env.REACT_APP_BASE_OSRM_URL}${start};${between};${finish}?steps=true&geometries=geojson&overview=full`,
    ).then((r) => r.json());
  },
};

export default routerApi;
