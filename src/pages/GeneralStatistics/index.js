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




export default class GeneralStatistics extends React.Component {
    _pageName = "general-statistics";

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

    handleShowAddItem = () => {
        this.setState({showAddItem: !this.state.showAddItem})
    }

    handleShowAddCurb = () => {
        this.setState({
            showAddCurb: !this.state.showAddCurb,
            showAddItem: !this.state.showAddItem,
        })
    }

    handleShowAddSupervisor = () => {
        this.setState({
            showAddSupervisor   : !this.state.showAddSupervisor,
            showAddItem         : !this.state.showAddItem,
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

    renderAddSupervisor() {
        return(
            <div className	= {this._pageName + '-add-item'}>
                <div
                    className	= {this._pageName + '-add-item-wrapper'}
                    onClick     = {this.handleShowAddSupervisor}
                />
                <WrappedSupervisorForm />
            </div>
        )
    }

    renderAddItemModal() {
        return(
            <div className	= {this._pageName + '-add-item'}>
                <div
                    className	= {this._pageName + '-add-item-wrapper'}
                    onClick     = { this.handleShowAddItem }
                />
                <div className	= {this._pageName + '-add-item-modal'}>
                    <div
                        className	= {this._pageName + '-add-item-button'}
                        onClick     = { this.handleShowAddCurb }
                    >
                        Adicionar curb
                    </div>
                    <div
                        className	= {this._pageName + '-add-item-button'}
                        onClick     = {this.handleShowAddSupervisor}
                    >
                        Adicionar supervisor
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className	= {this._pageName}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <HighlightCard
                        unitOfMeasure   = { 'km' }
                        amount          = { 278 }
                        subtitle        = { 'Percorridos' }
                        isPositive      = { true }
                        percentage      = { 7.34 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { 'L' }
                        amount          = { 145 }
                        subtitle        = { 'Tinta utilizada' }
                        isPositive      = { false }
                        percentage      = { 3.2 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '' }
                        amount          = { 87 }
                        subtitle        = { 'Viagens realizadas' }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '' }
                        amount          = { 12 }
                        subtitle        = { 'Curbs cadastrados' }
                    />
                </div>   
                <div className	= {this._pageName + '-holder'}>
                    <div className = {this._pageName + '-curb-holder'}> 
                        <TableCurb
                            history = { this.props.history }
                        />
                    </div>

                    <div className = {this._pageName + '-rows'}>
                        <ChartCurb />
                        <SupervisorTable />
                    </div>
                </div>
                { this.state.showAddItem ?
                this.renderAddItemModal () :
                this.state.showAddCurb ?
                this.renderAddCurb() :
                this.state.showAddSupervisor ?
                this.renderAddSupervisor() :
                <div
                    className	= {this._pageName + '-fb'}
                    onClick = { this.handleShowAddItem }
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
GeneralStatistics.propTypes = {
    text         : PropTypes.string

};

GeneralStatistics.defaultProps = {
    text         : "Sample component"
};
