import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import HighlightCard from "../../components/HighlightCard";
import { Icon } from "antd";
import WrappedCurbForm from "../../components/CurbForm";
import CurbCard from "../../components/CurbCard";
import GoogleApiWrapper from "../../components/GoogleMaps";
import TableTrip from "../../components/TableTrip";
import jsPDF from "jspdf";
import base64Img from 'base64-img';
import { StaticGoogleMap, Path, Marker } from "react-static-google-map";
import $ from "jquery";
import Report from "../../components/Report";
import { renderToString } from "react-dom/server";
import ReactDOMServer from "react-dom/server";


export default class Curb extends React.Component {
    _pageName = "curb-page";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            curbs               : this.props.location && this.props.location.state && this.props.location.state.curbs ? this.props.location.state.curbs : {},
            showAddItem         : false,
            showAddCurb         : false,
            showAddSupervisor   : false,
            url                 : null,
        };
    }

    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//

    componentDidMount(){
        setTimeout(() => {
            let imgObj = $('img')[0];
            if(imgObj){
                let url = imgObj.getAttribute('src')
                this.setState({url: url});
            }
        }, 100)
    }

    print = () => {
        const string = renderToString(<Report />);
        const pdf = new jsPDF("p", "mm", "a4");
        base64Img.requestBase64(this.state.url, function(err, res, body) {
                pdf.addImage(body,'JPEG', 5, 115, 150, 80)
                pdf.fromHTML(string);
                pdf.save("relatorio-curb");
            })
            console.log("PRINT:")
            console.log(this.state.url);
      };
      
    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

    handleShowAddCurb = () => {
        this.setState({
            showAddCurb: !this.state.showAddCurb,
            showAddItem: !this.state.showAddItem,

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
    
    render() {
        console.log("CURB:")
        console.log(this.state.curbs[0])
        
        return (
            <div className	= {this._pageName}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <HighlightCard
                        unitOfMeasure   = { 'km' }
                        amount          = { 38 }
                        subtitle        = { 'Percorridos' }
                        isPositive      = { true }
                        percentage      = { 17.83 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { 'L' }
                        amount          = { 14 }
                        subtitle        = { 'Tinta utilizada' }
                        isPositive      = { false }
                        percentage      = { 3.0 }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '' }
                        amount          = { this.state.curbs[0].travels.length }
                        subtitle        = { 'Viagens realizadas' }
                    />
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <TableTrip
                        curbs = { this.state.curbs }
                    />
                      
                    <div className = {this._pageName + '-row'}>
                        <div hidden>
                    <StaticGoogleMap 
                            size    = "800x300" 
                            apiKey  = "AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g"
                            zoom    = "12">
                            
                            <Marker
                                location={{ lat: 40.737102, lng: -73.990318 }}
                                color="red"
                                label="curb"
                            />
                            <Path
                                color="0xff0000ff"
                                points={[
                                '40.737102,-73.990318',
                                '40.749825,-73.987963',
                                '40.752946,-73.987384',
                                '40.755823,-73.986397',
                                ]}
                            />
                        </StaticGoogleMap>
                        </div>
                        <CurbCard
                            curb = { this.state.curbs[0] }
                        />

                    <button onClick={this.print}>Baixar Relatório</button>

                      
                        <GoogleApiWrapper />
                    </div>

                    <div hidden> 
                        <Report
                                supervisor = {this.state.curbs[0].userActive}
                                tinta = {this.state.curbs[0].travels[0].paint}
                                bateria = {this.state.curbs[0].travels[0].battery}
                                data = {this.state.curbs[0].travels[0].monitorings[0].data}
                                hora = {this.state.curbs[0].travels[0].monitorings[0].hora}
                            />
                    </div> 
                    
                </div>
                { this.state.showAddCurb ?
                this.renderAddCurb() :
                <div
                    className	= {this._pageName + '-fb'}
                    onClick = { this.handleShowAddCurb }
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
Curb.propTypes = {
    text         : PropTypes.string

};

Curb.defaultProps = {
    text         : "Sample component"
};
