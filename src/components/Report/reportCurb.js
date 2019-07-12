import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import curbImage    from '../../images/curb-logo.png';

export default class ReportCurb extends React.Component {
    _componentName = "report-curb";

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
        const bateriaFinal = this.props.curb[0].battery;
        const tintaFinal = this.props.curb[0].paint;
        const bateriaInicial = this.props.curb[0].travels[0].battery;
        const tintaInicial = this.props.curb[0].travels[0].paint;

        const consumoBateria = bateriaInicial - bateriaFinal;
        const consumoTinta = tintaInicial - tintaFinal;

        const numTravels = this.props.curb[0].travels.length - 1;



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
                            DADOS GERAIS
                        </div>
                    </div>
                    <div className   = {this._componentName + '-row'} >
                        <div className   = {this._componentName + '-title'}>
                            Supervisor:
                        </div>
                        { this.props.curb[0].userActive}
                    </div>
                    <div className   = {this._componentName + '-row'} >
                        <div className   = {this._componentName + '-title'}>
                            Data:
                        </div>
                        {this.props.curb[0].travels[numTravels].monitorings[0].data}
                    </div>
                    <div className   = {this._componentName + '-row'} >
                        <div className   = {this._componentName + '-title'}>
                            Consumo de Bateria:
                        </div>
                        { consumoBateria + '%'}
                    </div>
                <div className   = {this._componentName + '-row'}>
                        <div className   = {this._componentName + '-title'}>
                            Consumo de Tinta:
                        </div>
                        { consumoTinta + ' %'}
                    </div>
                </div>
                </div>
               
        );
    }
}

// Component props and default prop values
ReportCurb.propTypes = {
    text         : PropTypes.string

};

ReportCurb.defaultProps = {
    text         : "report page"
};
