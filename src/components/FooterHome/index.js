import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Avatar, Icon } from "antd";



export default class FooterHome extends React.Component {
    _componentName = "footer-home";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            entrar    : "Entrar",
            cadastrar : "Cadastrar",
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
            <div className   = {this._componentName}>
                <div className   = {this._componentName + '-name' } >
                    <a href="/login"><p>{this.state.entrar}</p> </a>
                </div>
                <div className   = {this._componentName + '-name'} >
                <a href="cadastrar">{this.state.cadastrar}</a>
                </div>
               
            </div>
        );
    }
}

// Component props and default prop values
FooterHome.propTypes = {
    text         : PropTypes.string

};

FooterHome.defaultProps = {
    text         : "inCurb"
};
