import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { LatLngBoundsExpression } from 'leaflet';
import { selectRoute } from 'store/selectors';
import { Point } from 'interfaces';
import { AutoFitBound } from '../AutoFitBound';
import { Marker } from '../Marker';

interface DrawMapProps {
  center: Point;
  zoom: number;
}

export function DrawMap({ center, zoom }: DrawMapProps) {
  const route = useSelector(selectRoute);
  const [points, setPoints] = useState([]);
  const [originMarker, setOriginMarker] = useState<Point | null>(null);
  const [betweenMarker, setBetweenMarker] = useState<Point | null>(null);
  const [destinationMarker, setDestinationMarker] = useState<Point | null>(null);
  const [bounds, setBounds] = useState<LatLngBoundsExpression>([]);

  useEffect(() => {
    if (route) {
      const pointsOfRoute = route.routes[0].geometry.coordinates.map((arr: string[]) => [
        arr[1],
        arr[0],
      ]);
      setPoints(pointsOfRoute);
      const startPoint = { lat: route.start[0], lng: route.start[1] };
      const betweenPoint = { lat: route.between[0], lng: route.between[1] };
      const finishPoint = { lat: route.finish[0], lng: route.finish[1] };
      setOriginMarker(startPoint);
      setBetweenMarker(betweenPoint);
      setDestinationMarker(finishPoint);
      const newBounds = [startPoint, betweenPoint, finishPoint].map((m) => [
        m.lat,
        m.lng,
      ]);
      setBounds(newBounds as LatLngBoundsExpression);
    }
  }, [route]);

  const handleSetBounds = (newBounds: LatLngBoundsExpression) => {
    setBounds(newBounds);
  };

  return (
    <MapContainer bounds={bounds} center={center} zoom={zoom}>
      <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      <Polyline pathOptions={{ color: 'blue' }} positions={points}>
        <Popup>Polygon</Popup>
      </Polyline>
      {originMarker && <Marker position={originMarker} text='Старт' />}
      {betweenMarker && <Marker position={betweenMarker} text='Промежуточная точка' />}
      {destinationMarker && (
        <Marker position={destinationMarker} text='Финиш' />
      )}
      <AutoFitBound bounds={bounds} zoom={4} handleSetBounds={handleSetBounds} />
    </MapContainer>
  );
}
