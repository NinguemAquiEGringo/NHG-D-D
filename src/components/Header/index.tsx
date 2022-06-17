import React from 'react';
import { Link } from 'react-router-dom';
import { IHeaderParameters } from '../../@types';
import { Button } from '../Button';

export function Header({ headerClass }: IHeaderParameters) {
  return (
    <div className={headerClass}>
      <Link to="/">
        <Button content="Home" buttonClass="classeDoBotao" />
      </Link>
      <Link to="/create">
        <Button content="Create new Character" buttonClass="classeDoBotao" />
      </Link>
      <Link to="/charts">
        <Button content="View All charts" buttonClass="classeDoBotao" />
      </Link>
    </div>
  );
}
