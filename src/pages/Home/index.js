import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import SuppotHome from "../../components/SuppotHome";
import unbImage    from '../../images/unb.png';
import fgaImage    from '../../images/fga.png';
import fitfgaImage    from '../../images/fit-fga.png';
import HighlightCard from "../../components/HighlightCard";
import FooterHome from "../../components/FooterHome";


export default class Home extends React.Component {
    _pageName = "home";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            
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
            <div className	= {this._pageName + 'home'}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <SuppotHome     />
                </div>
                <div className	= {this._pageName + '-holder'}>  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <br/>
                    <div align="center">
                    <p align="rigth">Apoio:</p>
                        <a href="https://www.unb.br/">
                            <img height="80px" width="120px" hspace="10%" alt="unb"   src = { unbImage } />
                        </a>
                        <a href="https://fga.unb.br/"><img height="80px" width="120px" hspace="10%" src= {fgaImage} /></a>
                        <a href="https://fga.unb.br/unb-gama/feira-de-inovacao-e-tecnologia"><img height="80px" width="120px" hspace="10%" src={fitfgaImage} /></a>
                    </div>
                    <br/>
                    < FooterHome/>
                </div>
            </div>
        );
    }
}

// Component props and default prop values
Home.propTypes = {
    text         : PropTypes.string

};

Home.defaultProps = {
    text         : "Home!"
};
