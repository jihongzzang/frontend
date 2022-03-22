import React from 'react';
import GraphBoxes from './Graph/GraphBoxes';

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
