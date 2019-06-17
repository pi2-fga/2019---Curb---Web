import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import curbImage    from '../../images/curb.png'
import {
    batteryQuarter,
    mapO,
    paintBrush,
}                   from 'react-icons-kit/fa/'
import { Icon }     from 'react-icons-kit'
import QRCode       from 'qrcode.react'



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
                        src         = { curbImage }
                        alt         = ""
                    />
                </div>
                <div className   = {this._componentName + '-info'}>
                    <QRCode
                        value   = "www.google.com.br"
                        size    = { 80 }
                        level   = { 'M' }
                        style   = { {} }
                    />
                    <div className   = {this._componentName + '-info-row'}>
                        <Icon icon={batteryQuarter} style={{marginRight: 10}}/>
                        { this.props.curb && this.props.curb.battery ? (this.props.curb.battery + '%') : '' }
                    </div>
                    <div className   = {this._componentName + '-info-row'}>
                        <Icon icon={paintBrush} style={{marginRight: 10}} />
                        { this.props.curb && this.props.curb.paint ? (this.props.curb.paint + ' litros') : '' }
                    </div>
                    <div className   = {this._componentName + '-info-row'}>
                        <Icon icon={mapO} style={{marginRight: 10}} />
                        { this.props.curb && this.props.curb.distance ? (this.props.curb.distance + ' Km') : '' }
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
