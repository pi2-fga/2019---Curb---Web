import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Col }      from "antd";
import {
    ic_directions_car,
    ic_trending_down,
    ic_trending_up,
    ic_map,
}                   from 'react-icons-kit/md'
import { Icon }     from 'react-icons-kit'
import curbImage    from '../../images/curb.png'



export default class CurbCard extends React.Component {
    _componentName = "curb-card";

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
            <div className   = {this._componentName} >
                <div className   = {this._componentName + '-img-holder'}>
                    <img
                     className   = {this._componentName + '-img'}
                        src = { curbImage }
                    />
                </div>
                <div className   = {this._componentName + '-info'}>
                    <div className   = {this._componentName + '-row'} >
                        <div className   = {this._componentName + '-title'}>
                            BATERIA
                        </div>
                        { this.props.curb.battery + '%'}
                    </div>
                    <div className   = {this._componentName + '-row'}>
                        <div className   = {this._componentName + '-title'}>
                            TINTA
                        </div>
                        { this.props.curb.paint + ' litros'}
                    </div>
                </div>
            </div>
        );
    }
}

// Component props and default prop values
CurbCard.propTypes = {
    text         : PropTypes.string

};

CurbCard.defaultProps = {
    text         : "Thiago Felix"
};
