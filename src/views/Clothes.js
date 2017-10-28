import React from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Stats from '../components/Stats';

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

// <MyMapComponent isMarkerShown />// Map with a Marker
//<MyMapComponent isMarkerShown={false} />// Just only Map

const Clothes = () => (
  <div className="home-view">
    <Header></Header>

    <Box variant="fullwidth color-b">
      <header className="Box-header">
        <h2>Let your wardrobe breath and help others!</h2>
      </header>
      <main className="Box-content">
        <img src="/images/clothes.png" alt="" />
        <p>
          Not enough space in your wardrobe?
          With us you can make some. <br/>
          Find a place where you can give away your old clothes. <br/>
          Make yourself and others happy <br/>
        </p>
      </main>
    </Box>

    <Box variant="fullwidth color-c">
      <MyMapComponent isMarkerShown />
    </Box>

    <Stats></Stats>

  </div>
);

export default Clothes;
