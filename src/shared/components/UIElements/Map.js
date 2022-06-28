import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRpYnJpc2FuIiwiYSI6ImNsNHkyYnFlZzFudTgzZXBod3l4NHgzdXYifQ.B4GJKRYAnRveplygdbBWnQ";

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { center, zoom } = props;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });
  });

  return (
    <div
      ref={mapContainer}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
