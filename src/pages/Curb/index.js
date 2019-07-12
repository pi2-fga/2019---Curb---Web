import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import HighlightCard from "../../components/HighlightCard";
import { Icon } from "antd";
import WrappedCurbForm from "../../components/CurbForm";
import CurbCard from "../../components/CurbCard";
import GoogleApiWrapper from "../../components/GoogleMaps";
import TableTrip from "../../components/TableTrip";
import { StaticGoogleMap, Path, Marker } from "react-static-google-map";
import PrintReport from "../../components/Report/PrintReport";


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
            consumes            : [],
        };
    }

    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//

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

        let i = 0;
        let sumPaint = 0;
        let sumBattery = 0;
        let size = this.state.curbs[0].travels.length
        for (i = 0; i< size; i++){
            let numMonitorings = this.state.curbs[0].travels[i].monitorings.length -1;

            let paintStart = this.state.curbs[0].travels[i].monitorings[0].tinta;
            console.log("viagem")
            console.log(this.state.curbs[0].travels[i])
            console.log("tinta inicial")
            console.log(paintStart)
            let paintEnd = this.state.curbs[0].travels[i].monitorings[numMonitorings].tinta;
            console.log("tinta final")
            console.log(paintEnd)
            let consumePaintTravel =  paintStart - paintEnd; 
            let batteryStart = this.state.curbs[0].travels[i].monitorings[0].bateria;
            let batteryEnd = this.state.curbs[0].travels[i].monitorings[numMonitorings].bateria;
            let consumeBatteryTravel =  batteryStart - batteryEnd 
            sumPaint = sumPaint + consumePaintTravel
            console.log("soma tinta")
            console.log(sumPaint)
            sumBattery = sumBattery + consumeBatteryTravel
            console.log("soma bateria")
            console.log(sumBattery)
            
        }
        console.log("FINAL soma bateria")
            console.log(sumBattery)

        console.log("FINAL soma tinta")
        console.log(sumPaint)
        // essas são coordenadas de uma rua do Gama para simular um trajeto do curb
        // const trajeto = [
        //     "-16.021241,  -48.051139",
        //     "-16.021051,  -48.051459"
        // ];

        const paintPercentageToLiter = sumPaint * 0.03;


        const bateriaFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].battery;
        const tintaFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].paint;
        const bateriaInicial = this.state.curbs[0].travels[0].battery;
        const tintaInicial = this.state.curbs[0].travels[0].paint;

        const consumoBateria = bateriaInicial - bateriaFinal;
        const consumoTinta = tintaInicial - tintaFinal;

        // essas variaveis pegam as coordenadas da ultima viagem realizada para que o google maps possa renderizar
        const latFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings[this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings.length-1].latitudeFinal;
        const lngFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings[this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings.length-1].logitudeFinal;
        const lngInicial = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings[0].logitudeInicial;
        const latInicial = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings[0].latitudeInicial;
        //essa parte forma uma string com a posição inicial e final da viagem para o google maps statico [imagem do relatório]
        const posicaoInicial = latInicial +' , '+ lngInicial
        const posicaoFinal = latFinal +' , '+lngFinal
        
        console.log(posicaoFinal)

        return (
            <div className	= {this._pageName}>
                <div className	= {this._pageName + '-highlight-holder'}>
                    <HighlightCard
                        unitOfMeasure   = { '%' }
                        amount          = { consumoBateria }
                        subtitle        = { 'Bateria utilizada' }
                        isPositive      = { true }
                        percentage      = { "" }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '%' }
                        amount          = { consumoTinta }
                        subtitle        = { 'Tinta utilizada' }
                        isPositive      = { false }
                        percentage      = { "" }
                    />
                    <HighlightCard 
                        unitOfMeasure   = { '' }
                        amount          = { this.state.curbs[0].travels.length }
                        subtitle        = { 'Viagens realizadas' }
                    />
                </div>   
                <div className	= {this._pageName + '-holder'}>     
                    <TableTrip
                        curbs   = { this.state.curbs }
                        history = { this.props.history }
                        loading = { this.state.loadingCurb }
                    />
                      
                    <div className = {this._pageName + '-row'}>
                        <div hidden>
                       
                    <StaticGoogleMap 
                            size    = "800x300" 
                            apiKey  = "AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g"
                            zoom    = "20">
                            
                            <Marker
                                location={{ lat: {latInicial}, lng: {lngInicial} }}
                                color="red"
                                label="curb"
                            />
                            <Path
                                color="0xff0000ff"
                                points={[
                                    {posicaoInicial},
                                    {posicaoFinal}
                                ]}
                            />
                        </StaticGoogleMap>
                        </div>
                        <CurbCard
                            curb = { this.state.curbs[0] }
                        />
                        <PrintReport
                            curbs   = { this.state.curbs }
                            history = { this.props.history }
                            loading = { this.state.loadingCurb }
                            />

                    {/* <Link to="/relatorio"  >   
                    <div hidden>        
                        <ReportCurb
                            curbs   = { this.state.curbs }
                            history = { this.props.history }
                            loading = { this.state.loadingCurb } />
                        </div>  */}
                        {/* <button 
                         curbs   = { this.state.curbs[0].travels }
                         history = { this.props.history }
                         loading = { this.state.loadingCurb }
                        onClick={this.handleButtonClick}
                        >Baixar Relatório</button> */}
                        {/* </Link> */}
                    
                    <br/>
                    {/* <button onClick={this.printWind}>Baixar Página</button> */}


                      
                        <GoogleApiWrapper />
                    </div>
                    {/* <ReportPage
                        // curbs   = { this.state.curbs }
                        // history = { this.props.history }
                        // loading = { this.state.loadingCurb }
                    /> */}
                    {/* </div><div hidden> */}
                    {/* <ReportCurb
                         curbs   = { this.state.curbs }
                         history = { this.props.history }
                         loading = { this.state.loadingCurb }
                        />
                    </div> */}

                    {/* <div hidden> 
                        <Report
                                curbs   = { this.state.curbs }
                                history = { this.props.history }
                                loading = { this.state.loadingCurb }
                                supervisor = {this.state.curbs[0].userActive}
                                tinta = {this.state.curbs[0].travels[0].paint}
                                bateria = {this.state.curbs[0].travels[0].battery}
                                data = {this.state.curbs[0].travels[0].monitorings[0].data}
                                hora = {this.state.curbs[0].travels[0].monitorings[0].hora}
                            />
                    </div> 
                     */}
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
