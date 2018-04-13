import React from 'react';
import GoogleMapReact from 'google-map-react';

export default (props) => {
  return (
    <div style={{ height: '180px', width: '180px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
        defaultCenter={[props.lat, props.lon]}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  )
}
