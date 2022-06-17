import React from 'react';
import { Header } from '../../components/Header';
import { InputPack } from '../../components/InputPack';

export function CreateChart() {
  return (
    <div>
      <Header headerClass="headercoisa" />

      <InputPack labelId="Character name" inputType="text" inputPlaceholder="character name" inputPackClass="qualquer" />

      <div>
        <InputPack labelId="CLASSE E NÍVEL" inputType="text" inputPlaceholder="CLASSE E NÍVEL" inputPackClass="qualquer" />
        <InputPack labelId="ANTECEDENTES" inputType="text" inputPlaceholder="ANTECEDENTES" inputPackClass="qualquer" />
        <InputPack labelId="JOGADOR" inputType="text" inputPlaceholder="JOGADOR" inputPackClass="qualquer" />
        <InputPack labelId="RAÇA" inputType="text" inputPlaceholder="RAÇA" inputPackClass="qualquer" />
        <InputPack labelId="TENDÊNCIA" inputType="text" inputPlaceholder="TENDÊNCIA" inputPackClass="qualquer" />
        <InputPack labelId="PONTOS DE REFERÊNCIA" inputType="text" inputPlaceholder="PONTOS DE REFERÊNCIA" inputPackClass="qualquer" />
      </div>

      <InputPack labelId="BÔNUS DE PROFICIÊNCIA" inputType="text" inputPlaceholder="BÔNUS DE PROFICIÊNCIA" inputPackClass="qualquer" />

      <InputPack labelId="INSPIRAÇÃO" inputType="text" inputPlaceholder="INSPIRAÇÃO" inputPackClass="qualquer" />

      <div>
        <InputPack labelId="FORÇA" inputType="text" inputPlaceholder="FORÇA" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
        </div>
      </div>

      <div>
        <InputPack labelId="DESTREZA" inputType="text" inputPlaceholder="DESTREZA" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
          <InputPack labelId="acrobáticos" inputType="checkbox" inputPlaceholder="acrobáticos" inputPackClass="qualquer" />
          <InputPack labelId="furtividade" inputType="checkbox" inputPlaceholder="furtividade" inputPackClass="qualquer" />
          <InputPack labelId="punga" inputType="checkbox" inputPlaceholder="DESTREZA" inputPackClass="qualquer" />
        </div>
      </div>

      <div>
        <InputPack labelId="CONSTITUIÇÃO" inputType="text" inputPlaceholder="CONSTITUIÇÃO" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
        </div>
      </div>

      <div>
        <InputPack labelId="INTELIGÊNCIA" inputType="text" inputPlaceholder="INTELIGÊNCIA" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
          <InputPack labelId="arcana" inputType="checkbox" inputPlaceholder="arcana" inputPackClass="qualquer" />
          <InputPack labelId="história" inputType="checkbox" inputPlaceholder="história" inputPackClass="qualquer" />
          <InputPack labelId="investigação" inputType="checkbox" inputPlaceholder="investigação" inputPackClass="qualquer" />
          <InputPack labelId="natureza" inputType="checkbox" inputPlaceholder="natureza" inputPackClass="qualquer" />
          <InputPack labelId="religião" inputType="checkbox" inputPlaceholder="religião" inputPackClass="qualquer" />
        </div>
      </div>

      <div>
        <InputPack labelId="SABEDORIA" inputType="text" inputPlaceholder="SABEDORIA" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
          <InputPack labelId="adestrar animais" inputType="checkbox" inputPlaceholder="adestrar animais" inputPackClass="qualquer" />
          <InputPack labelId="intuição" inputType="checkbox" inputPlaceholder="intuição" inputPackClass="qualquer" />
          <InputPack labelId="medicina" inputType="checkbox" inputPlaceholder="medicina" inputPackClass="qualquer" />
          <InputPack labelId="percepção" inputType="checkbox" inputPlaceholder="percepção" inputPackClass="qualquer" />
          <InputPack labelId="sobrevivência" inputType="checkbox" inputPlaceholder="sobrevivência" inputPackClass="qualquer" />
        </div>
      </div>

      <div>
        <InputPack labelId="CARISMA" inputType="text" inputPlaceholder="CARISMA" inputPackClass="qualquer" />
        <div>
          <InputPack labelId="jogada de proteção" inputType="checkbox" inputPlaceholder="jogada de proteção" inputPackClass="qualquer" />
          <InputPack labelId="atuação" inputType="checkbox" inputPlaceholder="atuação" inputPackClass="qualquer" />
          <InputPack labelId="enganação" inputType="checkbox" inputPlaceholder="enganação" inputPackClass="qualquer" />
          <InputPack labelId="intimidação" inputType="checkbox" inputPlaceholder="intimidação" inputPackClass="qualquer" />
          <InputPack labelId="persuasão" inputType="checkbox" inputPlaceholder="persuasão" inputPackClass="qualquer" />
        </div>
      </div>

      <InputPack labelId="SABEDORIA PASSIVA (PERCEPÇÃO)" inputType="text" inputPlaceholder="SABEDORIA PASSIVA (PERCEPÇÃO)" inputPackClass="qualquer" />
    </div>
  );
}
