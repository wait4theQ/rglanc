import {MapContainer, TileLayer, Marker, Popup, CircleMarker} from 'react-leaflet';
import L from 'leaflet';
import React from 'react';

import 'leaflet/dist/leaflet.css';


function Map () {
	const customIcon = new L.Icon({
		iconUrl: require('./img/mark.png'),
		iconSize: [32, 32], 
		iconAnchor: [16, 32], 
		popupAnchor: [0, -32], 
	  });

 

  return (
    <div className="map-section">

				<MapContainer center={[-23.546251771783243, -46.62364273558242]} zoom={15} style={{ height: '300px', width: '80%', margin: '20px auto' }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={[-23.546251771783243, -46.62364273558242]} icon={customIcon}>
   
  </Marker>
</MapContainer>
				</div>
  );
}

export default Map;
