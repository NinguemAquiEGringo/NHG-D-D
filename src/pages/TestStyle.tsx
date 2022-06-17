import React from 'react';
import '../styles/TestStyle.scss';

export default function TestStyle() {
  return (
    <div className="page">
      <h1>Todos os estilos do site:</h1>
      <label htmlFor="box-1" className="label-line">
        <p>Nome do personagem</p>
        <input id="box-1" placeholder="nome  do personagem" type="text" />
      </label>
      <div className="box-atribute">
        <div className="atr-1">
          <p>+3</p>
          <input type="text" />
        </div>
        <div className="atr-2">
          <div className="line">
            <input type="checkbox" />
            <input type="number" />
            <input placeholder="proteção" type="text" />
          </div>
          <div className="line">
            <input type="checkbox" />
            <input type="number" />
            <input placeholder="furtividade" type="text" />
          </div>
          <div className="line">
            <input type="checkbox" />
            <input type="number" />
            <input placeholder="atletismo" type="text" />
          </div>
        </div>
      </div>
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
