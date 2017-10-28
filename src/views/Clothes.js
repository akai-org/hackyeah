import React from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    defaultZoom={6}
    defaultCenter={{ lat: 52.2430, lng: 16.5603 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 51.2813, lng: 16.5418 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 52.1734, lng: 21.0658 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 54.4735, lng: 18.2451 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.2925, lng: 22.1555 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.2715, lng: 18.3120 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.5605, lng: 19.5714 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.3040, lng: 18.1802 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 53.0401, lng: 19.2425 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 52.2430, lng: 16.5603 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.0850, lng: 21.5808 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.4257, lng: 16.5006 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.3139, lng: 17.1617 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 54.4540, lng: 17.3326 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.2828, lng: 22.1944 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 54.1017, lng: 21.0828 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.4505, lng: 15.0103 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.0944, lng: 21.1413 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 54.3642, lng: 18.4829 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 51.5751, lng: 19.4242 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.4017, lng: 22.4014 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 54.0930, lng: 19.2410 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 53.2131, lng: 15.2534 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 50.5325, lng: 21.3053 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 53.1009, lng: 15.2510 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 52.0200, lng: 23.0700 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.5118, lng: 19.2028 }} />}
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

    <Box variant="fullwidth color-a map">
      <MyMapComponent isMarkerShown />
    </Box>

    <Stats></Stats>

    <Footer/>

  </div>
);

export default Clothes;
