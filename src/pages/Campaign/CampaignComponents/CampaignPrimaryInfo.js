import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

function CampaignPrimaryInfo({ List, dropDownList, stateTag }) {
  return (
    <CampaignPrimaryInfoBox>
      <DropDown dropDownList={dropDownList} />
      <CampaignPrimaryInfos>
        <CampaignState>
          <span>{stateTag}</span>
        </CampaignState>
        <CampaignPrimaryInfoText>
          <span>{List?.name}</span>
          <span>{List.campaignTag}</span>
          <CampaignPeriod>
            {List?.startDate} ~ {List?.endDate}
          </CampaignPeriod>
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
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const CampaignState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 24px;
  margin: 0 5px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
  background-color: #5891e5;
  span {
    color: ${({ theme }) => theme.palette.white};
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    font-weight: 400;
  }
`;
const CampaignPeriod = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
`;
const CampaignPrimaryInfoText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
`;

export default CampaignPrimaryInfo;
