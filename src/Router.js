import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import InfluencerPerformance from './pages/InfluencerPerformance/InfluencerPerformance';
import Nav from './components/Nav/Nav';
import InfluencerAnalysis from './pages/InfluencerAnalysis/InfluencerAnalysis';
import Campaign from './pages/Campaign/Campaign';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/influencer" element={<InfluencerPerformance />} />
        <Route path="/analysis" element={<InfluencerAnalysis />} />
        <Route path="/campaign" element={<Campaign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
