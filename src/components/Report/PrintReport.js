import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'

export default class PrintReport extends React.Component {
    _componentName = "print-report";

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

    handleRowClick = (event) => {
        this.props.history.push('/relatorio', {curbs: this.props.curbs})
    }

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        return (
            <div className   = {this._componentName} >
                <button onClick={this.handleRowClick}>Salvar Relatório</button>
                </div>
        );
    }
}

// Component props and default prop values
PrintReport.propTypes = {
    text         : PropTypes.string

};

PrintReport.defaultProps = {
    text         : "report print"
};
