import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import Hello from "./Hello";
import Prints from "./Prints"
import jsPDF from "jspdf";
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

