import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCampaignState } from '../../../selectedCampaignState';
import styled from 'styled-components';
import DropDown from './DropDown';
import { convertDate } from '../../../Hooks/convertData';

function CampaignPrimaryInfo({
  value,
  onChange,
  List,
  dropDownList,
  stateTag,
}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {List ? (
        <CampaignPrimaryInfoBox>
          <DropDown
            dropDownList={dropDownList}
            value={value}
            onChange={onChange}
          />
          <CampaignPrimaryInfos>
            <CampaignState>
              <span>{List.campaign_status}</span>
            </CampaignState>
            <CampaignPrimaryInfoText>
              <span>{List.description}</span>
              <span>{List.tag}</span>
              <CampaignPeriod>
                {convertDate(List.created_at)} ~ {convertDate(List.end_at)}
              </CampaignPeriod>
            </CampaignPrimaryInfoText>
          </CampaignPrimaryInfos>
        </CampaignPrimaryInfoBox>
      ) : (
        'null'
      )}
    </>
  );
}

const CampaignPrimaryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 46.65vw;
`;

const CampaignPrimaryInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5vh;
  background-color: ${({ theme }) => theme.palette.white};
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
  color: ${({ theme }) => theme.palette.darkGrey};
`;
const CampaignPrimaryInfoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  color: ${({ theme }) => theme.palette.darkGrey};
`;

export default CampaignPrimaryInfo;
