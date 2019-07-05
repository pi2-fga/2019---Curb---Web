import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import Prints from "./Prints"
import jsPDF from "jspdf";
import base64Img from 'base64-img'
import PropTypes    from 'prop-types';
import { StaticGoogleMap, Path, Marker } from "react-static-google-map";
import $ from "jquery";

export default class GoogleMapsImage extends React.Component {
    _pageName = "google-maps-image";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            showAddItem         : false,
            showAddAdministrator: false,
            url                 : '',
        };
    }


    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//

    componentDidMount(){
        setTimeout(() => {
            let imgObj = $('img')[0]

            if(imgObj){
                let url = imgObj.getAttribute('src')

                this.setState({url: url})
            }
        }, 1000)
    }

    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    print = () => {
        const string = renderToString(<Prints />);
        const pdf = new jsPDF("p", "mm", "a4");
        base64Img.requestBase64(this.state.url, function(err, res, body) {
            pdf.addImage(body, 'JPEG', 100, 100, 100, 100)
              const columns = [
                "Supervisor",
                "Código",
                "Data",
                "Hora",
                "Tinta",
                "Bateria"
              ];
              var rows = [
                [
                  "Fulano",
                  "1",
                  "02/07/2019",
                  "19:00",
                  "7 L",
                  "45%"
                ]
              ];
              pdf.fromHTML(string);
              pdf.save("pdf");
         })
      };

    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        return (
            <div className	= {this._pageName + '-google-maps-image'}>
                <StaticGoogleMap 
                    size    = "800x300" 
                    apiKey  = "AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g">
                    
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


                <button onClick={this.print}>Download</button>
            </div>
        );
    }
}


// Component props and default prop values
GoogleMapsImage.propTypes = {
    text         : PropTypes.string

};

GoogleMapsImage.defaultProps = {
    text         : "Maps image!"
};
