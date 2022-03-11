import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedCampaignState } from '../../selectedCampaignState';
import CampaignInfo from './CampaignComponents/CampaignInfo';
import CompletedCampaign from './CampaignComponents/CompletedCampaign';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';

function Campaign() {
  const [state, setState] = useRecoilState(selectedCampaignState);
  function findCampaign(e) {
    if (e.id == state) {
      return true;
    }
  }
  const selectedCampaign = campaignList?.find(findCampaign);
  console.log(selectedCampaign);
  const campaignStates = selectedCampaign?.campaignState;

  return (
    <div>
      <CampaignInfo List={selectedCampaign} dropDownList={campaignList} />
      {campaignStates ? <OngoingCampaign /> : <CompletedCampaign />}
    </div>
  );
}

export default Campaign;

const campaignList = [
  {
    id: 1,
    name: '이상하고 아름다운 캠페인',
    endDate: '2022-03-20',
    campaignState: true,
    korState: '진행 중',
    onGoing: {
      one: 'onGoing-one',
      two: 'onGoing-two',
    },
  },
  {
    id: 2,
    name: '이미 끝나버린 캠페인',
    endDate: '2022-03-05',
    campaignState: false,
    korState: '완료',
    completed: {
      one: 'completed-one',
      two: 'completed-two',
    },
  },
  {
    id: 3,
    name: '아직도 안 끝난 캠페인',
    endDate: '2022-03-15',
    campaignState: true,
    korState: '진행 중',
    onGoing: {
      one: 'onGoing-three',
      two: 'onGoing-four',
    },
  },
  {
    id: 4,
    name: '끝난지 얼마안된 캠페인',
    endDate: '2022-03-01',
    campaignState: false,
    korState: '완료',
    completed: {
      one: 'completed-three',
      two: 'completed-four',
    },
  },
];
