import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'



export default class Login extends React.Component {
    _pageName = "login";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {

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
            <div className	= {this._pageName}>
				oioioioi
            </div>
        );
    }
}

// Component props and default prop values
Login.propTypes = {
    text         : PropTypes.string

};

Login.defaultProps = {
    text         : "Sample component"
};
