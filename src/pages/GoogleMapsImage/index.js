import React        from "react";
import PropTypes    from 'prop-types';
import GoogleMapStatic from "../../components/GoogleMapStatic";


export default class GoogleMapsImage extends React.Component {
    _pageName = "google-maps-image";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showAddItem: false,
            showAddAdministrator: false,
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
        return (
            <div className	= {this._pageName + '-google-maps-image'}>
                    <GoogleMapStatic/>
            </div>
        );
    }
}


// Component props and default prop values
GoogleMapsImage.propTypes = {
    text         : PropTypes.string

};

GoogleMapsImage.defaultProps = {
    text         : "Maps image!"
};
