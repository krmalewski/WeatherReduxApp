import React, { Component } from 'react';

class GoogleMap extends Component {
	// this lifecycle method gets called automatically after this compoenent has been rendered to the screen
	componentDidMount() {
		// this is how we create an embedded google map inside of our document
		// takes reference to an HTML element where the map will be rendered to
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map will give me a direct reference to this HTML element
		return <div ref="map" />;
	}
}

export default GoogleMap;

// Another way to render google map?
// import React from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// export default (props) => {
// 	return (
// 		<GoogleMapLoader
// 			containerElement={ <div style={{height: '100%'}} /> }
// 			googleMapElement={
// 				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
// 			}
// 			/>
// 	);
// }