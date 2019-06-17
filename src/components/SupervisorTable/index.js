import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Table}  from "antd";
import { MOCK } from "../../settings/mock";



export default class SupervisorTable extends React.Component {
    _componentName = "supervisor-table";

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
              title     : 'Código',
              dataIndex : 'cod',
            },
            {
              title     : 'Status',
              dataIndex : 'operating',
              render    : this.renderBool
            },
            {
              title     : 'Tinta',
              dataIndex : 'paint',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'L') }
            },
            {
              title     : 'Distância Percorrida',
              dataIndex : 'distance',
              align     : 'center',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'Km') }
            },
            {
                title     : 'Bateria',
                dataIndex : 'battery',
                align     : 'center',
                render    : (text, record, index) => { return this.renderMeasures(text, record, index, '%') }
              },
            {
              title     : 'Ações',
              dataIndex : 'id',
              render    : this.renderActions
            },
          ];

        return (
            <div className   = {this._componentName}>
                <div className = {this._componentName + '-title'}>
                    SUPERVISORES
                </div>
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
SupervisorTable.propTypes = {
    text         : PropTypes.string

};

SupervisorTable.defaultProps = {
    text         : "Table of all CURBs"
};
