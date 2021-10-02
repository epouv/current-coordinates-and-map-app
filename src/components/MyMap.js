import React, { useEffect } from 'react';
import '../index.css';
import L from 'leaflet';
import {} from 'mapbox-gl-leaflet';

function MyMap(props) {
  let mapContainer;

   useEffect(()=>{

    const map = L.map(mapContainer).setView([props.lat, props.lng], 12);

    // the attribution is required for the Geoapify Free tariff plan
    map.attributionControl.setPrefix('').addAttribution('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>');

    var myAPIKey = '241f344b3db142a28d2a3b62b4277503';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const gl = L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: '241f344b3db142a28d2a3b62b4277503'
    }).addTo(map);
 

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXBvdXYiLCJhIjoiY2t1OW4xeTBsMDhpcjMzcXZxYjRuYWNmbiJ9.FL-pM8CpuNurxysjaI7HEg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXBvdXYiLCJhIjoiY2t1OW4xeTBsMDhpcjMzcXZxYjRuYWNmbiJ9.FL-pM8CpuNurxysjaI7HEg'
}).addTo(map);

}, [mapContainer]);

  return (
    <div className="map-container" ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;