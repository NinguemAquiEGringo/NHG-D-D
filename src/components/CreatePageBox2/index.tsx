import React from 'react';
import { InputPack } from '../InputPack/index';
import AtributeBox from '../AtributeBox';
import './style.scss';
import { InputLineBox3 } from './InputLineBox3';

export default function CreatePageBox2() {
  return (
    <div className="create-chart-page">
      <div className="box-1">
        <InputPack
          labelId="BÔNUS DE PROFICIÊNCIA"
          inputType="number"
          inputPlaceholder=""
          inputPackClass="label-skill"
        />

        <InputPack
          labelId="INSPIRAÇÃO"
          inputType="number"
          inputPlaceholder=""
          inputPackClass="label-skill"
        />
      </div>

      <div className="box-2">
        <AtributeBox inputType="number" atributeName="Força" />
        <AtributeBox inputType="number" atributeName="Destreza" />
        <AtributeBox inputType="number" atributeName="Constituição" />
        <AtributeBox inputType="number" atributeName="Inteligência" />
        <AtributeBox inputType="number" atributeName="Sabedoria" />
        <AtributeBox inputType="number" atributeName="Carisma" />
      </div>

      <div className="box-3">
        <InputLineBox3
          inputType1="checkbox"
          inputType2="number"
          lineName="Sabedoria percepção passiva"
        />
      </div>
    </div>
  );
}
