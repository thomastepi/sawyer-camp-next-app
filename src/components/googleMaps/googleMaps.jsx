"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import InfoWindowChild from "./infoWindowChild";
import { farmInfo as f } from "@/data/sawyerCampInfo";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = f.position;

function MapWithInfoWindow() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={handleInfoWindowClose}
        >
          <InfoWindowChild selectedMarker={selectedMarker} />
        </InfoWindow>
      )}
      <Marker
        key={f.id}
        position={f.position}
        options={f.markerOptions}
        onClick={() => handleMarkerClick(f)}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapWithInfoWindow);
