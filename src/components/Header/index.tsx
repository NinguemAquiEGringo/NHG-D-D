import React from 'react';
import { Link } from 'react-router-dom';
import { IHeaderParameters } from '../../@types';

export function Header({ headerClass }: IHeaderParameters) {
  return (
    <div className={headerClass}>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/create">
        <button type="button">Create new Character</button>
      </Link>
      <Link to="/charts">
        <button type="button">View All charts</button>
      </Link>
    </div>
  );
}
