import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryInfo from './CampaignPrimaryInfo';
import CampaignSecondaryFigures from './CampaignSecondaryFigures';

function CampaignInfo() {
  return (
    <CampaignInfoBox>
      <CampaignPrimaryInfo />
      <CampaignSecondaryFigures />
    </CampaignInfoBox>
  );
}

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
`;

export default CampaignInfo;
