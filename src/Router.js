import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import InfluencerPerformance from './pages/InfluencerPerformance/InfluencerPerformance';
import Nav from './components/Nav/Nav';
import Campaign from './pages/Campaign/Campaign';

function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Main />} />
          <Route path="/influencer" element={<InfluencerPerformance />} /> */}
          <Route path="/campaign" element={<Campaign />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default Router;
