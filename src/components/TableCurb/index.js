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
              name: 'Mike',
              age: 32,
              address: '10 Downing Street',
            },
            {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
          ];
          
          const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
          ];

        return (
            <div className   = {this._componentName}>
                 
                <Table dataSource={dataSource} columns={columns} />                         
            
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
