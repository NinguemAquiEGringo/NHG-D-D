import React from 'react';
import './style.scss';

export default function AtributeBox({ inputType, atributeName }: any) {
  return (
    <div className="atributebox">
      <p>***</p>
      <input type={inputType} />
      <h1>{atributeName}</h1>
    </div>
  );
}
