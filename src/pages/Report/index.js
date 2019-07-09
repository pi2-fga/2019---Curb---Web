import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'
import { Icon } from "antd";
import WrappedCurbForm from "../../components/CurbForm";
import TableTrip from "../../components/TableTrip";
import { StaticGoogleMap, Path, Marker } from "react-static-google-map";
import ReportCurb from "../../components/Report/reportCurb";



export default class ReportPage extends React.Component {
    _pageName = "report-page";

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

    
    //-------------------------//

      
    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

    handleShowAddCurb = () => {
        this.setState({
            showAddCurb: !this.state.showAddCurb,
            showAddItem: !this.state.showAddItem,

        })
    }

    handlePrintReport() {
        setTimeout(() => {
            window.print()
        }, 1000)
      
    }
    // handleRowClick = (event) => {
    //     this.props.history.push('/curb', {curbs: this.props.curbs})
    // }

    // handleButtonClick = (event) => {
    //     this.props.history.push('/relatorio', {curbs: this.props.curbs})
    // }
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
        // essas são coordenadas de uma rua do Gama para simular um trajeto do curb
        // const trajeto = [
        //     "-16.021241,  -48.051139",
        //     "-16.021051,  -48.051459"
        // ];
        console.log("---------")
        console.log("PRINT CURB 1 EM RELATORIO")
        console.log(this.state.curbs[0].travels)

        const bateriaFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].battery;
        const tintaFinal = this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].paint;
        const bateriaInicial = this.state.curbs[0].travels[0].battery;
        const tintaInicial = this.state.curbs[0].travels[0].paint;

        const consumoBateria = bateriaInicial - bateriaFinal;
        const consumoTinta = tintaInicial - tintaFinal;

        //************************* */
        // essas variaveis pegam as coordenadas da ultima viagem realizada para que o google maps possa renderizar
        //
        // const latFinal = this.state.curbs.travels[this.state.curbs.travels.length-1].monitorings[this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings.length-1].latitudeFinal;
        // const lngFinal = this.state.curbs.travels[this.state.curbs.travels.length-1].monitorings[this.state.curbs[0].travels[this.state.curbs[0].travels.length-1].monitorings.length-1].logitudeFinal;
        // const lngInicial = this.state.curbs.travels[this.state.curbs.travels.length-1].monitorings[0].logitudeInicial;
        // const latInicial = this.state.curbs.travels[this.state.curbs.travels.length-1].monitorings[0].latitudeInicial;
        // //essa parte forma uma string com a posição inicial e final da viagem para o google maps statico [imagem do relatório]
        // const posicaoInicial = latInicial +' , '+ lngInicial
        // const posicaoFinal = latFinal +' , '+lngFinal
        
        // console.log(posicaoFinal)
        //******************************* */

        return (
            <div className	= {this._pageName}>
                    <h2 ><b>Relatório de atividades do curb</b></h2>
                    <br/>
                    <br/>
                
                <div className	= {this._pageName + '-holder'}>   
                    <ReportCurb
                            curb = { this.state.curbs }
                        />  
                <h2>Trajeto realizado</h2>
                <br/>
               
                    <StaticGoogleMap 
                            size    = "800x300" 
                            apiKey  = "AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g"
                            zoom    = "18">
                            
                            <Marker
                                location={{ lat: -16.021241, lng: -48.051139 }}
                                color="red"
                                label="curb"
                            />
                            <Path
                                color="0xff0000ff"
                                points={[
                                    "-16.021241,  -48.051139",
                                    "-16.021051,  -48.051459"
                                ]}
                            />
                    </StaticGoogleMap>
                   
                    <TableTrip
                        curbs = { this.state.curbs }
                    />
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

            { this.handlePrintReport()}
                
            </div>
            
        );
       
    }
}

// Component props and default prop values
ReportPage.propTypes = {
    text         : PropTypes.string

};

ReportPage.defaultProps = {
    text         : "Sample component"
};
