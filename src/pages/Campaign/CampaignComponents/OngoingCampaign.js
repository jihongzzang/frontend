import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './GraphBoxes';
import Feeds from './Feeds';

function OngoingCampaign() {
  return (
    <div>
      <CampaignPrimaryFigures FigureStandardText="*2022년 3월 2일 기준, 전 일 대비 증가량" />
      <GraphBoxes />
      <Feeds />
    </div>
  );
}

export default OngoingCampaign;
