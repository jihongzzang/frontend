import React from 'react';
import CampaignInfo from './CampaignComponents/CampaignInfo';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';

function Campaign() {
  return (
    <div>
      <CampaignInfo />
      <OngoingCampaign />
    </div>
  );
}

export default Campaign;
