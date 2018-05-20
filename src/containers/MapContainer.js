import React, { Component } from 'react';
import {Map, Polygon, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
	
	constructor() {
		super();
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		}
	}

	onMarkerClick(props, marker, e) {
		this.setState({
			selectedPlace: props,
			activeMarker: marker, 
			showingInfoWindow: true
		});
	}

	onMapClicked(props) {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	}	

	render() {		
		const triangleCoords = [
	    {lat: 25.774, lng: -80.190},
	    {lat: 18.466, lng: -66.118},
	    {lat: 32.321, lng: -64.757},
	    {lat: 25.774, lng: -80.190}
  	];
		return (
			<Map google={this.props.google} zoom={14} initialCenter={{lat: 40.854885,
            lng: -100}}>
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
				<Marker onClick={this.onMarkerClick.bind(this)}
								name={'Current Location'} />
				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
						<h1>{this.state.selectedPlace.name}</h1>
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCO3b5rD3tihXWtAHp_R6GD35qsj9OC4r8'
})(MapContainer);