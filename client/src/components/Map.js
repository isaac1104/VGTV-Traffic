import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: 1140,
      height: 800,
      latitude: 34.04924594193164,
      longitude: -118.24104309082031,
      zoom: 13
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg'}
        mapStyle='mapbox://styles/mapbox/streets-v10'
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;
