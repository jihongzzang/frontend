import React from 'react';
import GraphBoxes from './Graph/GraphBoxes';
import Feeds from './Feeds/Feeds';

function OngoingCampaign({ List, campaignStatus, dailyList }) {
  return (
    <div>
      <GraphBoxes
        List={List}
        campaignStatus={campaignStatus}
        dailyList={dailyList}
      />
      {/* <Feeds /> */}
    </div>
  );
}

export default OngoingCampaign;
