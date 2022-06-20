import React from 'react';
import { Header } from '../../components/Header';
import CreatePageBox1 from '../../components/CreatePageBox1/index';
import CreatePageBox2 from '../../components/CreatePageBox2';
import './style.scss';

export function CreateChart() {
  return (
    <>
      <Header headerClass="headercoisa" />
      <div className="main-page">
        <CreatePageBox1 />
        <CreatePageBox2 />
      </div>
    </>

  );
}
