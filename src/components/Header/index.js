import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Avatar, Icon } from "antd";



export default class MyHeader extends React.Component {
    _componentName = "header";

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

    renderLogout(){
        return(
            <div className   = {this._componentName + '-logout'}>
                SAIR
                
                <Icon
                    type        = "logout"
                    className   = {this._componentName + '-icon'}
                />
            </div>
        )
    }

    render() {
        return (
            <div className   = {this._componentName}>
                <div className   = {this._componentName + '-name'}>
                    {this.props.text}
                </div>
                <div
                    className   = {this._componentName + '-avatar'}
                    onClick     = {() => {this.setState({showLogout: !this.state.showLogout})}}
                >
                    <Avatar size="large" icon="user" />
                </div>
                {
                    this.state.showLogout && this.renderLogout()                    
                }
            </div>
        );
    }
}

// Component props and default prop values
MyHeader.propTypes = {
    text         : PropTypes.string

};

MyHeader.defaultProps = {
    text         : "Thiago Felix"
};
