import React from 'react';
import styled from 'styled-components';
import CampaignInfo from './CampaignComponents/CampaignInfo';
import CampaignPrimaryFigures from './CampaignComponents/CampaignPrimaryFigures';
import GraphBoxes from './CampaignComponents/GraphBoxes';
import Feeds from './CampaignComponents/Feeds';

function Campaign() {
  return (
    <div>
      <CampaignInfo />
      <CampaignPrimaryFigures />
      <GraphBoxes />
      <Feeds />
    </div>
  );
}

export default Campaign;
