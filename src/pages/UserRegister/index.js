import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import UserFormRegister from "../../components/UserFormRegister";


export default class UserRegister extends React.Component {
    _pageName = "user-register";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showAddItem: false,
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
                <div className	= {this._pageName + '-register-holder'}>
                    <UserFormRegister />
                </div>        
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
