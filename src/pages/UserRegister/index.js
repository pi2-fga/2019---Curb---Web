import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import WrappedAdministratorForm from "../../components/AdministratorForm";


export default class UserRegister extends React.Component {
    _pageName = "user-register";

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

/*     handleClick = () => {
        this.setState({
            name: this.state.name === 'Iolanne' ? 'Thiago' : 'Iolanne'
        }, () => {
            console.log(this.state.name)
        })
    } */

    handleShowAddItem = () => {
        this.setState({showAddItem: !this.state.showAddItem})
    }

    handleShowAddAdministrator = () => {
        this.setState({
            showAddAdministrator: !this.state.showAddAdministrator,
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
                    onClick     = {this.handleShowAddAdministrator}
                />
                    <WrappedAdministratorForm />
                      
            </div>
        );
    }
}

// Component props and default prop values
UserRegister.propTypes = {
    text         : PropTypes.string

};

UserRegister.defaultProps = {
    text         : "User Register"
};
