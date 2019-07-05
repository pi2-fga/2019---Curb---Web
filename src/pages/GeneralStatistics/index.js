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
import Axios from "axios";




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

    componentDidMount() {
        this.getUsers()
        this.getMonitorings()
    }


    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//

    getUsers(){
        Axios.get('http://gustavo2795.pythonanywhere.com/usuarios/')
    		.then((response) => {
                console.log(response.data)
                this.setState({
                    users: response.data && response.data.length ? response.data : []
                })
    		})
    		.catch((error) => {
    			console.log('Fail getting users')
    		})
    }

    getMonitorings(){
        Axios.get('http://gustavo2795.pythonanywhere.com/monitoramentos/')
    		.then((response) => {
                let date = ''
                let travels = []
                let temp = []
                for(let i=0; i<response.data.length; i++){
                    if(response.data[i].data !== date && i!==0){
                        let travel = {}
                        if(temp.length)
                            travel = {
                                paint       : temp[temp.length-1].tinta - temp[0].tinta,
                                battery     : temp[temp.length-1].bateria - temp[0].bateria,
                                monitorings : temp
                            }
                        travels.push(travel)
                        date = response.data[i].data;
                        temp = [response.data[i]]
                    } else {
                        temp.push(response.data[i])
                        if(i === response.data.length - 1){
                            let travel = {
                                paint       : temp[temp.length-1].tinta - temp[0].tinta,
                                battery     : temp[temp.length-1].bateria - temp[0].bateria,
                                monitorings : temp
                            }
                            travels.push(travel)
                            date = response.data[i].data;
                            temp = []
                        }
                        if(i === 0)
                            date = response.data[i].data
                    }
                }
                this.setState({
                    monitorings : response.data && response.data.length ? response.data : [],
                    travels     : travels,
                }, () =>{
                    this.setCurb()
                })
    		})
    		.catch((error) => {
    			console.log('Fail getting monitorings')
    		})
    }

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

    updateSupervisorList = () => {
        this.getUsers()
        this.setState({
            showAddItem         : false,
            showAddCurb         : false,
            showAddSupervisor   : false,
        })
    }

    setCurb(){
        let curb = {
            paint   : Array.isArray(this.state.monitoring) && this.state.monitoring.length ? this.state.monitoring[this.state.monitoring.length-1].paint : 0,
            bateria : Array.isArray(this.state.monitoring) && this.state.monitoring.length ? this.state.monitoring[this.state.monitoring.length-1].bateria : 0,
            travels : this.state.travels,
            status  : Array.isArray(this.state.monitoring) && this.state.monitoring.length && this.state.monitoring[this.state.monitoring.length-1].status === 'true' ? 'Ligado' : 'Desligado'
        }

        this.setState({
            curb: curb
        }, () => {
            console.log(this.state)
        })
    }

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
                <WrappedSupervisorForm
                    updateSupervisorList = { this.updateSupervisorList }
                />
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
                        amount          = { 1 }
                        subtitle        = { 'Curbs cadastrados' }
                    />
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <TableCurb />
                    <div className = {this._pageName + '-rows'}>
                        <ChartCurb />
                        <SupervisorTable
                            users = { this.state.users }
                        />
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
