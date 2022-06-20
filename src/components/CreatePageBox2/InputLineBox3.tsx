import React from 'react';
import './style.scss';

export function InputLineBox3({
  inputType1,
  inputType2,
  lineName
}: any) {
  return (
    <label htmlFor={lineName}>
      <input
        type={inputType1}
      />
      <input type={inputType2} />
      <p>{lineName}</p>
    </label>
  );
}
