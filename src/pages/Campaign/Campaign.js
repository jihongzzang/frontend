import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedCampaignState } from '../../selectedCampaignState';
import CampaignInfo from './CampaignComponents/CampaignInfo';
import CompletedCampaign from './CampaignComponents/CompletedCampaign';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';
import LIST from './CampaignComponents/LIST';

function Campaign() {
  const [state, setState] = useRecoilState(selectedCampaignState);
  // const [campaignList, setCampaignList] = useState([]);

  // useEffect(() => {
  //   fetch('http://172.1.6.129:8000/influencer/yooo?status_filter=all')
  //     .then(res => res.json())
  //     .then(res => {
  //       setCampaignList(res[0]);
  //       console.log(res[0]);
  //     });
  // }, []);

  const campaignList = LIST;
  function findCampaign(e) {
    if (e.id == state) {
      return true;
    }
  }
  const selectedCampaign = campaignList?.find(findCampaign);

  function defineState() {
    if (selectedCampaign?.campaign_status === '진행 중') {
      return true;
    }
    if (selectedCampaign?.campaign_status === '완료') {
      return false;
    }
  }
  const campaignStates = defineState();
  const handle = e => {
    setState(e.target.value);
  };
  return (
    <CampaignWrap>
      {campaignStates ? (
        <>
          <CampaignInfo
            List={selectedCampaign}
            dropDownList={campaignList}
            stateTag="진행 중"
            value={state}
            onChange={handle}
          />
          <OngoingCampaign List={selectedCampaign} />
        </>
      ) : (
        <>
          <CampaignInfo
            List={selectedCampaign}
            dropDownList={campaignList}
            stateTag="완료"
            value={state}
            onChange={handle}
          />
          <CompletedCampaign List={selectedCampaign} />
        </>
      )}
    </CampaignWrap>
  );
}

const CampaignWrap = styled.div`
  padding: 1% 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;

export default Campaign;
