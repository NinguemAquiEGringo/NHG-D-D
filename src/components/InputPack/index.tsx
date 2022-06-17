import React from 'react';
import { IInputPackParameters } from '../../@types';
import { Input } from '../Input';

export function InputPack({
  inputType, labelId, inputPlaceholder, inputPackClass
}: IInputPackParameters) {
  return (
    <div>
      <label htmlFor={labelId} className={inputPackClass}>
        <p>{labelId}</p>
        <Input id={labelId} type={inputType} placeholder={inputPlaceholder} />
      </label>
    </div>
  );
}
