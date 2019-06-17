import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Table}  from "antd";
import { MOCK } from "../../settings/mock";



export default class TravelTable extends React.Component {
    _componentName = "travel-table";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showLogout  : false,
            curbs       : MOCK.curbs,
            innerWidth  : 1,
        };

        window.addEventListener("resize", this.handleResize);
    }

    componentDidMount() {
        this.handleResize()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

    handleResize = () => {
        this.setState( {innerWidth: window.innerWidth} )
    }

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    renderActions = (text, record, index) => {
        return (
            <div>
                Olá!
            </div>
        )
    }

    renderBool = (text, record, index) => {
        return (
            <div>
                { (text === true ? 'Em operação' : 'Desligado')}
            </div>
        )
    }

    renderMeasures(text, record, index, scale){
        return (
            <div>
                { text + scale }
            </div>
        )
    }

    render() {
          const columns = [
            {
              title     : 'Data',
              dataIndex : 'cod',
            },
            {
              title     : 'Início',
              dataIndex : 'operating',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'H') }
            },
            {
              title     : 'Fim',
              dataIndex : 'paint',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'H') }
            },
            {
              title     : 'Distância Percorrida',
              dataIndex : 'distance',
              align     : 'center',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'Km') }
            },
            {
                title     : 'Tinta utilizada',
                dataIndex : 'paint',
                align     : 'center',
                render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'L') }
            },
            {
              title     : 'Ações',
              dataIndex : 'id',
              render    : this.renderActions
            },
          ];

        return (
            <div className   = {this._componentName}>
                 
                <Table
                    className   = {this._componentName + '-table'}
                    dataSource  = {this.state.curbs}
                    columns     = {columns}
                    size        = {'small'}
                    pagination  = { false }
                    scroll      = {{ x: (this.state.innerWidth <= 600 ? 1000 : 0) }}
                />
            
            </div>
        );
    }
}

// Component props and default prop values
TravelTable.propTypes = {
    text         : PropTypes.string

};

TravelTable.defaultProps = {
    text         : "Table of all CURBs"
};
