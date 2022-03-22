import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { uiChangeCondition } from '../../../Atoms/campaignFetchDataState';
import { convertDate } from '../../../Hooks/convertData';

function CampaignInformation({ List }) {
  const campaignState = useRecoilValue(uiChangeCondition);

  return (
    <CampaignInfoBox>
      <CampaignState>
        {campaignState ? <span>진행 중</span> : <span>완료</span>}
      </CampaignState>
      <CampaignPrimaryInfoText>
        <span>{List?.Campaign?.description}</span>
        <span>{List?.Campaign?.tag}</span>
        <CampaignPeriod>
          {convertDate(List?.Campaign?.created_at)} ~{' '}
          {convertDate(List?.Campaign?.end_at)}
        </CampaignPeriod>
      </CampaignPrimaryInfoText>
    </CampaignInfoBox>
  );
}

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid #e1e1ef;
`;

const CampaignState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 24px;
  margin: 0 5px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
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

export default CampaignInformation;
