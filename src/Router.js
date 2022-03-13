import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import InfluencerPerformance from './pages/InfluencerPerformance/InfluencerPerformance';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/influencer" element={<InfluencerPerformance />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default Router;
