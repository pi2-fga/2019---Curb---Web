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
import curbImage    from '../../images/curb-logo.png';


export default class SupportHome extends React.Component {
    _componentName = "support-home";

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
                        src = { curbImage }
                    />
                </div>
                <div className   = {this._componentName + '-info'}>
                    <div className   = {this._componentName + '-row'} >
                        <div className   = {this._componentName + '-title'}>
                            Projeto CURB:
                            </div>
                            <br/>
                            <p align="justify">O CURB é uma máquina autônoma que objetiva realizar a pintura de meios-fios 
                                através da pulverização de tinta, visando uma cobertura uniforme e a redução 
                                de desperdícios de material. Sua movimentação acompanha o meio-fio com uma 
                                distância fixa, acompanhando inclusive as as curvas presentes na trajetória. 
                                Além disso, o Curb conta com painéis fotovoltaicos que supre parte da energia 
                                de sua bateria para melhorar sua autonomia.</p>
                            <p align="justify">O CURB WEB é uma plataforma que visa auxilar os administradores de serviços de 
                                pintura de meio-fio que geram relatórios sobre os serviços realizados e 
                                monitora seus recursos, como: tinta, bateria, trajetórias, mão-de-obra e o 
                                número de carrinhos CURB disponíveis.</p>
                    </div>
                </div>
               
            </div>
        );
    }
}

// Component props and default prop values
SupportHome.propTypes = {
    text         : PropTypes.string

};

SupportHome.defaultProps = {
    text         : "hello"
};
