import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg';
    const MapboxTraffic = require('@mapbox/mapbox-gl-traffic');
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [-117.716092, 33.639792],
        zoom: 11.5,
    });
    new mapboxgl.Marker().setLngLat([-117.716092, 33.639792]).addTo(map)
    const trafficOptions = {
      showTraffic: true,
      showTrafficButton: false
    }
    map.addControl(new MapboxTraffic(trafficOptions));
  }

  render() {
    const style = {
      map: {
        height: '100vh'
      }
    }

    return (
      <div id='map' style={style.map} />
    );
  }
}

export default Map;
