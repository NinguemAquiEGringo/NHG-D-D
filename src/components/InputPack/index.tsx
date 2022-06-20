import React from 'react';
import { IInputPackParameters } from '../../@types';
import './style.scss';

export function InputPack({
  inputType,
  labelId,
  inputPlaceholder,
  inputPackClass
}: IInputPackParameters) {
  return (
    <label htmlFor={labelId} className={inputPackClass}>
      <p>{labelId}</p>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </label>
  );
}
