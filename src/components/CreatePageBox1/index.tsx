import React from 'react';
import { InputPack } from '../InputPack/index';

export default function CreatePageBox1() {
  return (
    <div className="page-create-chart">
      <div className="split-chart-1">
        <InputPack
          labelId="Nome do personagem"
          inputType="text"
          inputPlaceholder=""
          inputPackClass="label-line"
        />

        <div className="box-header">
          <InputPack
            labelId="CLASSE E NÍVEL"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
          <InputPack
            labelId="ANTECEDENTES"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
          <InputPack
            labelId="JOGADOR"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
          <InputPack
            labelId="RAÇA"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
          <InputPack
            labelId="TENDÊNCIA"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
          <InputPack
            labelId="PONTOS DE REFERÊNCIA"
            inputType="text"
            inputPlaceholder=""
            inputPackClass="header-label-line"
          />
        </div>
      </div>
    </div>
  );
}
