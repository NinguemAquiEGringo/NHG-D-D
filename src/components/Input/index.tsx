import React from 'react';
import { IInputParameters } from '../../@types';

export function Input({ type, placeholder, inputClass }: IInputParameters) {
  return (
    <div>
      <input className={inputClass} type={type} placeholder={placeholder} />
    </div>
  );
}
