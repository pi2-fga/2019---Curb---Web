import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Table}  from "antd";
import { MOCK } from "../../settings/mock";



export default class TableCurb extends React.Component {
    _componentName = "table-curb";

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

    handleRowClick = (event) => {
        this.props.history.push('/curb', {curbs: this.props.curbs})
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
              dataIndex : 'status',
              render    : this.renderBool
            },
            {
              title     : 'Tinta',
              dataIndex : 'paint',
              render    : (text, record, index) => { return this.renderMeasures(text, record, index, 'L') }
            },
            {
                title     : 'Bateria',
                dataIndex : 'battery',
                align     : 'center',
                render    : (text, record, index) => { return this.renderMeasures(text, record, index, '%') }
              },
          ];

        return (
            <div className   = {this._componentName}>
                 
                <Table
                    className   = {this._componentName + '-table'}
                    dataSource  = {this.props.curbs}
                    columns     = {columns}
                    size        = {'small'}
                    loading     = {this.props.loading}
                    pagination  = { false }
                    scroll      = {{ x: (this.state.innerWidth <= 600 ? 1000 : 0) }}
                    onRow={(record, rowIndex) => {
                        return {
                          onClick: this.handleRowClick, // click row
                        };
                      }}
                />
            
            </div>
        );
    }
}

// Component props and default prop values
TableCurb.propTypes = {
    text         : PropTypes.string

};

TableCurb.defaultProps = {
    text         : "Table of all CURBs"
};
