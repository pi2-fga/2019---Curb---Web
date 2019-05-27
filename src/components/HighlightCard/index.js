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
        let iconType = this.props.percentage ? this.props.isPositive ? ic_trending_up : ic_trending_down :
                       this.props.subtitle === 'Viagens realizadas' ? ic_map : ic_directions_car;
        let backgroundColor = this.props.percentage ? this.props.isPositive ?
                              'rgba(73, 129, 253, 0.4)' : 'rgba(241, 7, 94, 0.4)' : 'rgba(86, 217, 254, 0.4)';
        let color = this.props.percentage ? this.props.isPositive ? '#4981FD' : '#F1075E' : '#11C8FC';;
        return (
            <Col className   = {this._componentName}>
                <div className   = {this._componentName + '-icon-holder'}>
                    <div
                    className   = {this._componentName + '-icon'}
                    style = {{backgroundColor: backgroundColor, color: color}}>
                        <Icon
                            icon = { iconType }
                            size = { 25 }
                        />
                    </div>

                </div>
                <div className   = {this._componentName + '-text-holder'}>
                    <div className   = {this._componentName + '-title'}>
                        { this.props.amount + this.props.unitOfMeasure }
                    </div>
                    <div className   = {this._componentName + '-subtitle'}>
                        { this.props.subtitle }
                    </div>
                </div>
                { this.props.percentage &&
                    <div className   = {this._componentName + '-percent-holder'}>
                        <div className   = {this._componentName + '-percent'}>
                            { this.props.percentage + '%'}
                        </div>                    
                    </div>
                }
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
