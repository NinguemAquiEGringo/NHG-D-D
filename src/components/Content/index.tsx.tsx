import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { CreateChart } from '../../pages/CreateChart';
import { ChartsList } from '../../pages/ChartsList';

export function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateChart />} />
      <Route path="/charts" element={<ChartsList />} />
    </Routes>
  );
}
