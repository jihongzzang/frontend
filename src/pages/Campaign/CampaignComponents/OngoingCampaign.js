import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './GraphBoxes';
import Feeds from './Feeds';

function OngoingCampaign() {
  return (
    <div>
      <CampaignPrimaryFigures />
      <GraphBoxes />
      <Feeds />
    </div>
  );
}

export default OngoingCampaign;
