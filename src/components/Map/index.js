import React from "react";
import { createHashHistory } from "history";
import { Map, TileLayer, Circle } from "react-leaflet";
import { Tooltip as LToolTip } from "react-leaflet";

const calculateRadius = (cases, multiplier, min, max) => {
  // Calculate radius.
  const radius = cases * multiplier; // Check for min and max.

  if (radius < min) return min;
  if (radius > max) return max; // Return radius.

  return radius;
};

const history = createHashHistory();

const onClickCircle = country => {
  console.log("CLICK", country);
  history.push(`/country/${country}`);
};

const MapComponent = props => {
  const { data } = props;

  return (
    <>
      {data && (
        <Map
          style={{
            height: "600px",
            marginTop: "32px"
          }}
          center={[51.505, -0.09]}
          zoom={3.5}
          maxZoom={12}
          minZoom={3}
          attributionControl={false}
          zoomControl={false}
          maxBoundsViscosity={0.7}
          useFlyTo
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png" />
          {data.confirmed.locations.map((location, index) => (
            <Circle
              key={index}
              center={[location.coordinates.lat, location.coordinates.long]}
              radius={calculateRadius(location.latest, 25, 15000, 500000)}
              color="red"
              fillColor="#f03"
              fillOpacity={0.5}
              onClick={() => onClickCircle(location.country)}
            >
              <LToolTip>
                <h4>
                  <b>{location.province || location.country}</b>
                  <br />
                  <b>Confirmed cases: {location.latest}</b>
                </h4>
              </LToolTip>
            </Circle>
          ))}
        </Map>
      )}
    </>
  );
};

export default MapComponent;
