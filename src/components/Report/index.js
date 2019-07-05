import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import Hello from "./Hello";
import Prints from "./Prints"
import jsPDF from "jspdf";
import base64Img from 'base64-img'
import PropTypes    from 'prop-types';
import './style.less';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Report extends React.Component {
    _componentName = "report-file";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    print = () => {
      const string = renderToString(<Prints />);
      const pdf = new jsPDF("p", "mm", "a4");
      base64Img.requestBase64('https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&key=AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g&path=color:0xff0000ff%7Cweight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397', function(err, res, body) {
        
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

    render() {

      return (
        <div className   = {this._componentName + '-report-file'}>
          <div style={styles}>
            <Hello name="Curb" />
            <h2>Gerar relatório de atividades do CURB {"\u2728"}</h2>
            <button onClick={this.print}>Download</button>
          </div>
          </div>
        );
      }
    }

// Component props and default prop values
Report.propTypes = {
  text         : PropTypes.string

};

Report.defaultProps = {
  text         : "É um relatório do curb para o administrador!"
};

