import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import HighlightCard from "../../components/HighlightCard";
import TableCurb from "../../components/TableCurb";
import ChartCurb from "../../components/ChartCurb";
import SupervisorTable from "../../components/SupervisorTable";
import { Icon } from "antd";
import WrappedCurbForm from "../../components/CurbForm";
import WrappedSupervisorForm from "../../components/SupervisorForm";
import CurbCard from "../../components/CurbCard";
import GoogleApiWrapper from "../../components/GoogleMaps";
import Report from "../../components/Report";
import { StaticGoogleMap, Path } from "react-static-google-map";
import TableTrip from "../../components/TableTrip";


export default class Curb extends React.Component {
    _pageName = "curb-page";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showAddItem         : false,
            showAddCurb         : false,
            showAddSupervisor   : false,
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

    handleShowAddCurb = () => {
        this.setState({
            showAddCurb: !this.state.showAddCurb,
            showAddItem: !this.state.showAddItem,
        })
    }
    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    renderAddCurb() {
        return(
            <div className	= {this._pageName + '-add-item'}>
                <div
                    className	= {this._pageName + '-add-item-wrapper'}
                    onClick     = {this.handleShowAddCurb}
                />
                <WrappedCurbForm />
            </div>
        )
    }
    
    render() {
        return (
            <div className	= {this._pageName}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <HighlightCard
                        unitOfMeasure   = { 'km' }
                        amount          = { 38 }
                        subtitle        = { 'Percorridos' }
                        isPositive      = { true }
                        percentage      = { 17.83 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { 'L' }
                        amount          = { 14 }
                        subtitle        = { 'Tinta utilizada' }
                        isPositive      = { false }
                        percentage      = { 3.0 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '' }
                        amount          = { 12 }
                        subtitle        = { 'Viagens realizadas' }
                    />
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <TableTrip />
                    <div className = {this._pageName + '-row'}>
                        <CurbCard />
                        <GoogleApiWrapper />
                    </div>
                    
                </div>
                { this.state.showAddCurb ?
                this.renderAddCurb() :
                <div
                    className	= {this._pageName + '-fb'}
                    onClick = { this.handleShowAddCurb }
                >
                    <Icon
                        type    = "plus"
                    />
                </div>
                }
              

            </div>
        );
    }
}

// Component props and default prop values
Curb.propTypes = {
    text         : PropTypes.string

};

Curb.defaultProps = {
    text         : "Sample component"
};
