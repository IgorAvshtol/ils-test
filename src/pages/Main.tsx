import React from 'react';
import { useSelector } from 'react-redux';
import { DrawMap } from 'components/DrawMap';
import { Loader } from 'components/Loader';
import { routeLoading, routeLoadingError } from 'store/selectors';

export function Main() {
  const loading = useSelector(routeLoading);
  const loadingError = useSelector(routeLoadingError);

  if (loadingError) return <div>Пожалуйста, повторите...</div>;
  if (loading) return <Loader />;

  return (
    <DrawMap
      center={{ lat: 43.349064, lng: 42.448763 }}
      zoom={14}
    />
  );
}
