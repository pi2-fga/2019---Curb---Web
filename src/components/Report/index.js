import React        from "react";
import TableTrip from "../TableTrip";

//Imprime a versão em PDF

export default ({ tinta, bateria, data, hora, supervisor }) => 
  
  <div>
      <h1>CURB: Relatório da viagem</h1>
      <p>Este é um relatório gerado a partir dos dados de viagem do curb.</p>
      <h3>SUPERVISOR:</h3>
      <p>{supervisor}</p>
      <h3>DATA:</h3>
      {data}
      <h3>HORA:</h3>
      {hora}
      <h3>TINTA:</h3>
      <p>{tinta} L </p>
      <h3>BATERIA:</h3>
      <p>{bateria}  % </p>
      <h3>Trajeto realizado:</h3>
  </div>;
