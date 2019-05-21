import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import HighlightCard from "../../components/HighlightCard";
import TableCurb from "../../components/TableCurb";
import ChartCurb from "../../components/ChartCurb";




export default class GeneralStatistics extends React.Component {
    _pageName = "general-statistics";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            name: 'Iolane',
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

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        return (
            <div className	= {this._pageName}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <TableCurb />
                    <ChartCurb />
                </div>
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
