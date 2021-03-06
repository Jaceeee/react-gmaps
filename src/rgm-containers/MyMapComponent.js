import React, { PureComponent } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const MyMapComponent = compose(
	withProps({ 
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1jADosLzEG3Arsbxf2U1RyXqo_NIrtEA&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '400px' }} />,
		mapElement: <div style={{ height: '100%' }} />
	}),
	withScriptjs,
	withGoogleMap
)((props) => 
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
	>
		{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
	</GoogleMap>	
)

class MyFancyComponent extends PureComponent {
	state = {
		isMarkerShown: false,
	}

	componentDidMount() {
		this.delayedShowMarker();		
	}

	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true})
		}, 3000);		
	}

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false });
		this.delayedShowMarker();
	}

	render() {
		return(
			<MyMapComponent
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}

}
export default MyFancyComponent;