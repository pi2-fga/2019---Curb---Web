import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Avatar, Icon, Col } from "antd";



export default class UserFormRegister extends React.Component {
    _componentName = "user-form-register";

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
            <div className   = {this._componentName}>
                <div className   = {this._componentName }>
                    42!
                    
                </div>
            </div>
        );
    }
}

// Component props and default prop values
UserFormRegister.propTypes = {
    text         : PropTypes.string

};

UserFormRegister.defaultProps = {
    text         : "É um formulario de cadastro de usuário!"
};
