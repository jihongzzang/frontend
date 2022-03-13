import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryInfo from './CampaignPrimaryInfo';
import CampaignSecondaryFigures from './CampaignSecondaryFigures';

function CampaignInfo({ List, dropDownList, stateTag }) {
  return (
    <CampaignInfoBox>
      <CampaignPrimaryInfo
        List={List}
        dropDownList={dropDownList}
        stateTag={stateTag}
      />
      <CampaignSecondaryFigures />
    </CampaignInfoBox>
  );
}

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export default CampaignInfo;
