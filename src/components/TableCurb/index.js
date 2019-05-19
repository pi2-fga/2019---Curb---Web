import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Table}  from "antd";



export default class TableCurb extends React.Component {
    _componentName = "table-curb";

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
        const dataSource = [
            {
              key: '1',
              name: 'CURB I',
              status: 'Em Operação',
              ink: '3',
              battery: '38%',
              distance: '7 km',
              edit: '',
            },
            {
              key: '2',
              name: 'CURB II',
              status: 'Em Operação',
              ink: '5',
              battery: '48%',
              distance: '8 km',
              edit: '',
            },
          ];
          
          const columns = [
            {
              title: 'Nome',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
            },
            {
              title: ' Tinta(L)',
              dataIndex: 'ink',
              key: 'ink',
            },
            {
              title: ' Bateria(%)',
              dataIndex: 'battery',
              key: 'battery',
            },
            {
              title: ' Distância(Km)',
              dataIndex: 'distance',
              key: 'distance',
            },
            {
              title: 'Alterar',
              dataIndex: 'edit',
              key: 'edit',
            },
          ];

        return (
            <div className   = {this._componentName}>
                <div className = {this._componentName + '-table-holder'} >
                    <Table dataSource={dataSource} columns={columns} size={"middle"} />                         
                </div>
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
