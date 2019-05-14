import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'



export default class SampleComponent extends React.Component {
    _componentName = "sample-component";

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
            <div className   = {this._componentName}>
                <Text>
                    {this.props.text}
                </Text>
            </div>
        );
    }
}

// Component props and default prop values
SampleComponent.propTypes = {
    text         : PropTypes.string

};

SampleComponent.defaultProps = {
    text         : "Sample component"
};
