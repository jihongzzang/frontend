import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

function CampaignPrimaryInfo({ List, dropDownList }) {
  return (
    <CampaignPrimaryInfoBox>
      <DropDown dropDownList={dropDownList} />
      <CampaignPrimaryInfos>
        <CampaignState>
          <span>{List?.korState}</span>
        </CampaignState>
        <CampaignPrimaryInfoText>
          <span>{List?.name}</span>
          <span>CampaignTag</span>
          <span>CampaignPeriod</span>
        </CampaignPrimaryInfoText>
      </CampaignPrimaryInfos>
    </CampaignPrimaryInfoBox>
  );
}

const CampaignPrimaryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49.16%;
`;

const CampaignPrimaryInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

const CampaignState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 24px;
  margin: 0 5px;
  border-radius: 12px;
  background-color: #5891e5;

  span {
    color: #fff;
  }
`;

const CampaignPrimaryInfoText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
`;

export default CampaignPrimaryInfo;
