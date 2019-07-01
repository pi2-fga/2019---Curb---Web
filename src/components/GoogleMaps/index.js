import React            from "react";
import PropTypes        from 'prop-types';
import './style.less';
import {
    Map, 
    GoogleApiWrapper, 
    Polyline, 
    Marker,
}                       from 'google-maps-react';


export class GoogleMaps extends React.Component {
    _componentName = "google-maps";
       

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showLogout: false,
        };
    }


    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

     render() {
        const triangleCoords = [
            {lat: -16.021241, lng: -48.051139},
            {lat: -16.021051, lng: -48.051459}
          ];
          return (
            <div className   = {this._componentName}>
                <div className  = {this._componentName + '-maps'}>
                <Map
                    google          = {this.props.google}
                    style           = {{width: '100%', height: 200, position: 'relative'}}
                    initialCenter   = {{lat: -16.021241, lng: -48.051139}}  
                    className       = {'map'}
                    zoom            = {17}
                >
                    <Marker
                      name={'Dolores park'}
                      position={{lat: -16.021241, lng: -48.051139}} />
                    <Polyline
                        path            = {triangleCoords}
                        strokeColor     = "#FF2400"
                        strokeOpacity   = {0.8}
                        strokeWeight    = {3} />
                </Map>
                </div>
            </div>
          );
        }
      }
       
export default GoogleApiWrapper({
          // eslint-disable-next-line 
    apiKey: ("AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g")
})(GoogleMaps);

// Component props and default prop values
GoogleMaps.propTypes = {
    text         : PropTypes.string

};

GoogleMaps.defaultProps = {
    text         : "Maps com as trajetorias de um CURB"
};
