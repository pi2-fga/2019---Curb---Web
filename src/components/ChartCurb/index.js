import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {Chart, Component} from 'react-google-charts';



export default class ChartCurb extends React.Component {
    _componentName = "chart-curb";

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
        return (
            <div className   = {this._componentName}>
                <div className = {this._componentName + '-chart'}>
                    
                        {/* initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
                        didMount={async function(component) {
                            const response = await fetch(
                            'http://gustavo2795.pythonanywhere.com/monitoramentos/',
                            )
                            const json = await response.json()
                            const rateCurrencyNames = Object.keys(json.rates)
                            const rateCurrencyValues = Object.values(json.rates)
                            const chartData = [['Currency Name', 'Currency Rate']]
                            for (let i = 0; i < rateCurrencyNames.length; i += 1) {
                            chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
                            }
                            component.setState({
                            dataLoadingStatus: 'ready',
                            chartData: chartData,
                            })
                        }}
                        >
                        {component => {
                            return component.state.dataLoadingStatus === 'ready' ? (
                            <Chart
                                chartType="BarChart"
                                data={component.state.chartData}
                                options={{
                                chartArea: {
                                    width: '50%',
                                },
                                title: 'EUR Price',
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            ) : (
                            <div>Fetching data from API</div>
                            )
                        }} */}
                    
                    <Chart
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['CURB', 'Tinta (L)', 'Bateria(%)', 'Distância(Km)'],
                            ['I', 7, 40, 20],
                            ['II', 11, 46, 25],
                            ['III', 66, 100, 30],
                            ['IV', 10, 54, 35],
                        ]}
                        options={{
                            // Material design options
                            chart: {
                            title: 'Estatísticas gerais',
                            subtitle: 'gastos por CURB',
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </div>
        );
    }
}

// Component props and default prop values
ChartCurb.propTypes = {
    text         : PropTypes.string

};

ChartCurb.defaultProps = {
    text         : "Chart of general CURBs"
};
