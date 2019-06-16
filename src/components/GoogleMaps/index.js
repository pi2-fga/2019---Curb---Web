import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Map, GoogleApiWrapper, Polyline, Marker} from 'google-maps-react';


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
            {lat: -16.013056, lng: -48.062500},
            {lat: -16.013889, lng:-48.060833 }
          ];
          return (
            <div className   = {this._componentName}>
                <div className  = {this._componentName + '-maps'}>
                <Map google={this.props.google}
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    initialCenter={{
                        lat: -16.013056,
                        lng: -48.062500
                      }}  
                    className={'map'}
                    zoom={17}>
                    <Polyline
                    paths={triangleCoords}
                    strokeColor="#FF2400"
                    strokeOpacity={0.8}
                    strokeWeight={3} />
                </Map>
                </div>
            </div>
          );
        }
      }
       
export default GoogleApiWrapper({
          // eslint-disable-next-line 
    apiKey: ("AIzaSyB0X23RdMtBzulqTBr5QSSwsKyLCuhRelk")
})(GoogleMaps);

// Component props and default prop values
GoogleMaps.propTypes = {
    text         : PropTypes.string

};

GoogleMaps.defaultProps = {
    text         : "Maps com as trajetorias de um CURB"
};
