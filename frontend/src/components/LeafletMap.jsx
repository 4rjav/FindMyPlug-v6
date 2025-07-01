import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function LeafletMap() {
  return (
    <MapContainer center={[19.07609, 72.877426]} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[19.07609, 72.877426]} />
    </MapContainer>
  );
}

export default LeafletMap;