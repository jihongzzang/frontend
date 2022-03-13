import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCampaignState } from '../../selectedCampaignState';
import CampaignInfo from './CampaignComponents/CampaignInfo';
import CompletedCampaign from './CampaignComponents/CompletedCampaign';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';

function Campaign() {
  const [state, setState] = useRecoilState(selectedCampaignState);

  function parseDate(date) {
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1 > 9
        ? (date.getMonth() + 1).toString()
        : '0' + (date.getMonth() + 1)) +
      '-' +
      (date.getDate() > 9
        ? date.getDate().toString()
        : '0' + date.getDate().toString())
    );
  }

  const today = parseDate(new Date());
  const yesterday = parseDate(
    new Date(Date.parse(new Date()) - 1 * 1000 * 60 * 60 * 24)
  );

  function findCampaign(e) {
    if (e.id == state) {
      return true;
    }
  }

  const selectedCampaign = campaignList?.find(findCampaign);

  function defineState(date) {
    if (date <= selectedCampaign?.endDate) {
      return true;
    }
  }

  const campaignStates = defineState(today);

  return (
    <div>
      {campaignStates ? (
        <>
          <CampaignInfo
            List={selectedCampaign}
            dropDownList={campaignList}
            stateTag="진행 중"
          />
          <OngoingCampaign />
        </>
      ) : (
        <>
          <CampaignInfo
            List={selectedCampaign}
            dropDownList={campaignList}
            stateTag="완료"
          />
          <CompletedCampaign />
        </>
      )}
    </div>
  );
}

export default Campaign;

const campaignList = [
  {
    id: 1,
    name: '이상하고 아름다운 캠페인',
    startDate: '2022-03-01',
    endDate: '2022-03-20',
    campaignTag: '@discoveryexpedition_kr',
  },
  {
    id: 2,
    name: '이미 끝나버린 캠페인',
    startDate: '2022-03-01',
    endDate: '2022-03-05',
    campaignTag: '@discoveryexpedition_kr',
  },
  {
    id: 3,
    name: '아직도 안 끝난 캠페인',
    startDate: '2022-03-01',
    endDate: '2022-03-15',
    campaignTag: '@discoveryexpedition_kr',
  },
  {
    id: 4,
    name: '끝난지 얼마안된 캠페인',
    startDate: '2022-03-01',
    endDate: '2022-03-01',
    campaignTag: '@discoveryexpedition_kr',
  },
];
