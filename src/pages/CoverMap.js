import "../App.css";
import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
  MarkerClusterer,
} from "@react-google-maps/api";
import "../Map.css";
import Typed from "react-typed";
import mapStyle from "../styled/mapStyle";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useHistory } from "react-router-dom";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
  top: "0vh",
  position: "absolute",
};
const center = {
  lat: 30.164126,
  lng: -180.643011,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 2.8,
  restriction: {
    latLngBounds: {
      north: 81,
      south: -81,
      west: -180,
      east: 180,
    },
  },
};

const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

export default function CoverMap() {
  const [markers, setMarkers] = useState([]);
  const history = useHistory();

  const [selected, setSelected] = useState(null);
  const [closed, setClosed] = useState(false);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  });

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  function createKey(location) {
    return location.lat + location.lng;
  }
  const clusterstyles = [
    {
      height: 53,
      url: "clusterer/m1.png",
      width: 53,
      anchorText: [-5, -4.5],
    },
    {
      height: 56,
      url: "clusterer/m2.png",
      width: 56,
      anchorText: [-5, -4.5],
    },
    {
      height: 66,
      url: "clusterer/m3.png",
      width: 66,
      anchorText: [-10, -11.5],
    },
    {
      height: 66,
      url: "clusterer/m3.png",
      width: 66,
      anchorText: [-10, -11.5],
    },
    {
      height: 66,
      url: "clusterer/m3.png",
      width: 66,
      anchorText: [-10, -11.5],
    },
  ];
  const clusteroptions = {
    imagePath: "clusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
    styles: clusterstyles,
  };

  return (
    <div className="mapContainer">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
      >
        {!closed ? (
          <div
            className="container"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>
              <Typed strings={["Bruin Share"]} typeSpeed={150}></Typed>
            </h1>
            <p className="text">
              "Life these days have not been easy. The COVID-19 pandemic has
              impacted every Bruin's live. No matter what you're going through -
              you're not alone."
            </p>
            <p>
              <strong>100</strong> students have shared their stories
            </p>
            <button
              className="getstartbutton"
              onClick={() => {
                history.push("/home");
              }}
            >
              Let's get started
            </button>
            <ArrowLeft
              className="arrowleft"
              onClick={() => setClosed(true)}
              // fontSizeLarge
            ></ArrowLeft>
          </div>
        ) : (
          <ArrowRight
            className="arrowright"
            onClick={() => setClosed(false)}
            // fontSizeLarge
          ></ArrowRight>
        )}

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={2.4}
          options={options}
          center={center}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          <MarkerClusterer options={clusteroptions}>
            {(clusterer) =>
              locations.map((location) => (
                <Marker
                  key={createKey(location)}
                  position={location}
                  clusterer={clusterer}
                  label={{
                    fontWeight: "bold",
                    text: "1",
                    fontFamily: "Roboto",
                  }}
                  icon={{
                    url: "whitedot.svg",
                  }}
                  onClick={() => {
                    console.log(selected, location);
                    if (
                      !selected ||
                      selected.lat !== location.lat ||
                      selected.lng !== location.lng
                    ) {
                      setSelected(location);
                    } else {
                      panTo(selected);
                    }
                  }}
                />
              ))
            }
          </MarkerClusterer>
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
              onClick={panTo(selected)}
            >
              <div>
                <h2>Post Title</h2>
                <p>Post text...</p>
              </div>
            </InfoWindow>
          ) : (
            ""
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
