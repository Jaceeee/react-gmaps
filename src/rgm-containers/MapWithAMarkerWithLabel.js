import React from 'react';

import { compose, withProps } from 'recompose';

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,	
} from 'react-google-maps';

import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

const MapWithAMarkerWithLabel = compose(
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
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
	>
		<MarkerWithLabel
			position={{ lat: -34.397, lng: 150.644 }}
			labelAnchor={{x: 0, y: 0}}
			labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
		>
			<div>Hello there!</div>
		</MarkerWithLabel>
	</GoogleMap>
);

export default MapWithAMarkerWithLabel;