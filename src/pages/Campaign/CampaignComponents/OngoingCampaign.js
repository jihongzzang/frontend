import React, { useEffect } from 'react';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './Graph/GraphBoxes';
import Feeds from './Feeds/Feeds';

function OngoingCampaign({ List, FiguresList }) {
  return (
    <div>
      <CampaignPrimaryFigures
        List={List}
        FigureStandardText="*2022년 3월 2일 기준, 전 일 대비 증가량"
      />
      <GraphBoxes List={List} FiguresList={FiguresList} />
      <Feeds />
    </div>
  );
}

export default OngoingCampaign;
