import React from 'react';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './Graph/GraphBoxes';
import Feeds from './Feeds/Feeds';

function OngoingCampaign({ List, campaignStatus }) {
  return (
    <div>
      <GraphBoxes List={List} campaignStatus={campaignStatus} />
      {/* <Feeds /> */}
    </div>
  );
}

export default OngoingCampaign;
