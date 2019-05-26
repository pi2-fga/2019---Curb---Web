import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Col } from "antd";



export default class HighlightCard extends React.Component {
    _componentName = "highlight-card";

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
        return (
            <Col className   = {this._componentName}>
                <div className   = {this._componentName + '-icon-holder'}>
                    <div className   = {this._componentName + '-icon'}>

                    </div>

                </div>
                <div className   = {this._componentName + '-text-holder'}>
                    <div className   = {this._componentName + '-title'}>
                        278km
                    </div>
                    <div className   = {this._componentName + '-subtitle'}>
                        Percorridos
                    </div>
                </div>
                <div className   = {this._componentName + '-percent-holder'}>
                    <div className   = {this._componentName + '-percent'}>
                        7,89%
                    </div>                    
                </div>
            </Col>
        );
    }
}

// Component props and default prop values
HighlightCard.propTypes = {
    text         : PropTypes.string

};

HighlightCard.defaultProps = {
    text         : "Thiago Felix"
};
