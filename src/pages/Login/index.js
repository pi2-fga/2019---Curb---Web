import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import WrappedLoginForm from "../../components/LoginForm";


export default class Login extends React.Component {
    _pageName = "login";

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

    handleShowAddItem = () => {
        this.setState({showAddItem: !this.state.showAddItem})
    }

    handleShowAddLogin = () => {
        this.setState({
            showAddLogin: !this.state.showAddLogin,
            showAddItem: !this.state.showAddItem,
        })
    }

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        return (
            <div className	= {this._pageName}>
                 <div
                    className	= {this._pageName + '-add-item-wrapper'}
                    onClick     = {this.handleShowAddLogin}
                />
                    <WrappedLoginForm />
                      
            </div>
        );
    }
}

// Component props and default prop values
Login.propTypes = {
    text         : PropTypes.string

};

Login.defaultProps = {
    text         : "Login!"
};
