import { Marker as MarkerL, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface MarkerProps {
  position: LatLngExpression;
  text: string;
}

export function Marker({ position, text }: MarkerProps) {
  if (!position) return null;
  return (
    <MarkerL position={position}>
      <Popup>{text}</Popup>
    </MarkerL>
  );
}
