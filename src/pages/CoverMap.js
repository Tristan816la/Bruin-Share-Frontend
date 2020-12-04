import "../App.css";
import React, { useCallback, useRef, useState, useEffect } from "react";
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
import axios from "axios";
import { Button } from "@material-ui/core";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
  top: "0vh",
  position: "absolute",
};
const center = {
  lat: 100.164126,
  lng: -160.643011,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 3.0,
  restriction: {
    latLngBounds: {
      north: 81,
      south: -81,
      west: -180,
      east: 180,
    },
  },
};

export default function CoverMap() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchPosts = await axios.get("/publicposts");
        const posts = fetchPosts.data.map((v) => {
          v.lat = parseFloat(v.lat);
          v.lng = parseFloat(v.lng);
          return v;
        });
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  const [selected, setSelected] = useState(null);
  const [closed, setClosed] = useState(false);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

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
    <>
      {posts.length ? (
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
                  impacted every Bruin's live. No matter what you're going
                  through - you're not alone."
                </p>
                <p className="text2">
                  <strong>{posts.length}</strong> students have shared their
                  stories
                </p>
                <Button
                  className="getstartbutton"
                  onClick={() => {
                    history.push("/home");
                  }}
                >
                  Let's get started
                </Button>
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
              onLoad={onMapLoad}
            >
              <MarkerClusterer options={clusteroptions}>
                {(clusterer) =>
                  posts.map((location, i) => (
                    <Marker
                      key={i}
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
                    <h2 style={{ paddingBottom: "10px" }}>{selected.topic}</h2>
                    <p>{selected.content}</p>
                  </div>
                </InfoWindow>
              ) : (
                ""
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
