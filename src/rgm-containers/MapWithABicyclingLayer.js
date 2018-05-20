import React from 'react';

import { compose, withProps } from 'recompose';

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	BicyclingLayer
} from 'react-google-maps';

const MapWithABicyclingLayer = compose(
	withProps({ 
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1jADosLzEG3Arsbxf2U1RyXqo_NIrtEA&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '400px' }} />,
		mapElement: <div style={{ height: '100%' }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => 
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 34.17223, lng: -118.37897 }}
	>
		<BicyclingLayer autoUpdate />
	</GoogleMap>
)

export default MapWithABicyclingLayer;