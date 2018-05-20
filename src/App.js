import React, { Component } from 'react';
// import GoogleApiComponent from './containers/MapContainer';

//uncomment any one of these, and replace inside the render method of App

// import MyFancyComponent from './rgm-containers/MyMapComponent';
// import StyledInfoBox from './rgm-containers/StyledInfoBox';
// import DemoClustererApp from './rgm-containers/MapWithAMarkerClusterer';
// import MapWithAMarkerWithLabel from './rgm-containers/MapWithAMarkerWithLabel';
// import MapWithABicyclingLayer from './rgm-containers/MapWithABicyclingLayer';
import MapWithADirectionsRenderer from './rgm-containers/MapWithADirectionsRenderer';

class App extends Component {
  render() {
    return (
      <MapWithADirectionsRenderer /> 
    );
  }
}

export default App;
