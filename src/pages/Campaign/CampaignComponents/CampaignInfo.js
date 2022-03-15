import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryInfo from './CampaignPrimaryInfo';
import CampaignSecondaryFigures from './CampaignSecondaryFigures';

function CampaignInfo({ value, onChange, List, dropDownList, stateTag }) {
  return (
    <CampaignInfoBox>
      <CampaignPrimaryInfo
        List={List}
        dropDownList={dropDownList}
        value={value}
        onChange={onChange}
        stateTag={stateTag}
      />
      <CampaignSecondaryFigures List={List} />
    </CampaignInfoBox>
  );
}

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CampaignInfo;
