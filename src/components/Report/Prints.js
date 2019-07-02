import React from 'react';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const colstyle = {
    width: "25%"
  };
  const tableStyle = {
    width: "100%"
  };

export default  () => 
    <div>
      <h3>Relatório de Atividades do Curb</h3>
      <h4>Dados gerais</h4>
      <table id="tab_customers" class="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr class="warning">
            <th>Supervisor</th>
            <th>Código</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Tinta</th>
            <th>Bateria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fulano</td>
            <td>1</td>
            <td>02/07/2019</td>
            <td>19:00</td>
            <td>7 L</td>
            <td>45%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Este documento é referente as ultimas atividades do curb
      </p>
    </div>;

