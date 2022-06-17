import React from 'react';
import { IButtonParameters } from '../../../@types';

export function InputButton({ content, buttonClass }: IButtonParameters) {
  return (
    <div>
      <button type="button" className={buttonClass}>{content}</button>
    </div>
  );
}
