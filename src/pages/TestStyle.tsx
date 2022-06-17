import React from 'react';
import '../styles/CreateChart.scss';

export default function TestStyle() {
  return (
    <div className="page">
      <h1>Todos os estilos do site:</h1>
      <input
        className="button-t1"
        placeholder="nome  do personagem"
        type="text"
      />
      <div className="box-1">
        <h1>Titulo da box</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione non
          sequi corporis laboriosam assumenda atque, porro voluptas maiores
          nobis odit consequuntur maxime deserunt recusandae cumque beatae iste
          debitis nam quaerat.
        </p>
        <p>informacoes</p>
      </div>
    </div>
  );
}
