import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CAMAPAIGN_BASE_URL } from '../../config';
import { formatDate } from '../../Hooks/convertData';
import CompletedCampaign from './CampaignComponents/CompletedCampaign';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';
import DropDown from './CampaignComponents/DropDown';
import CampaignInformationFigures from './CampaignComponents/CampaignInformationFigures';
import CampaignInformation from './CampaignComponents/CampaignInformation';
import CampaignPrimaryFigures from './CampaignComponents/CampaignPrimaryFigures';
import { selectedCampaignIdState } from '../../Atoms/campaignState';
import {
  proceedingCampaignList,
  completionCampaignList,
  completionCampaignGraphList,
} from '../../Atoms/campaignFetchDataState';

function Campaign() {
  const today = formatDate(new Date());
  const proceeding = useRecoilValue(proceedingCampaignList);
  const completion = useRecoilValue(completionCampaignList);
  const proceedingList = proceeding.filter(a => a?.Campaign?.end_at > today);
  const completedList = completion.filter(a => a?.Campaign?.end_at < today);
  const campaignList = completedList.concat(proceedingList);
  const completedCampaignGraph = useRecoilValue(completionCampaignGraphList);
  const [selectedCampaignId, setSelectedCampaignId] = useRecoilState(
    selectedCampaignIdState
  );
  const [dailyList, setDailyList] = useState([]);

  useEffect(() => {
    fetch(
      `${CAMAPAIGN_BASE_URL}proceeding_graph?campaign_id=${Number(
        selectedCampaignId
      )}
      `
    )
      .then(res => res.json())
      .then(res => {
        setDailyList(res[0]);
      });
  }, [Number(selectedCampaignId)]);

  const findCampaign = e => {
    if (e.Campaign.id === selectedCampaignId) {
      return true;
    }
  };

  const selectedCampaign = campaignList.find(findCampaign);

  const defineState = () => {
    if (selectedCampaign?.Campaign.end_at > today) {
      return true;
    } else if (selectedCampaign?.Campaign.end_at < today) {
      return false;
    }
  };

  const campaignStates = defineState();

  const handleCampaignValue = e => {
    setSelectedCampaignId(e.target.value);
  };

  return (
    <CampaignWrap>
      <CampaignInfoBoxWrap>
        <CampaignInfoBox>
          <DropDown
            dropDownList={campaignList}
            value={selectedCampaignId}
            onChange={handleCampaignValue}
          />
          <CampaignInformation
            campaignStates={campaignStates}
            selectedCampaign={selectedCampaign}
          />
        </CampaignInfoBox>
        <CampaignInformationFigures
          List={selectedCampaign}
          selectedCampaign={selectedCampaign}
        />
      </CampaignInfoBoxWrap>
      <CampaignPrimaryFigures
        List={selectedCampaign}
        campaignStatus={defineState()}
        completedCampaignList={completedCampaignGraph}
        dailyList={dailyList}
      />
      {selectedCampaign ? (
        campaignStates ? (
          <OngoingCampaign
            List={selectedCampaign}
            campaignStatus={defineState()}
            dailyList={dailyList}
          />
        ) : (
          <CompletedCampaign
            List={selectedCampaign}
            campaignStatus={defineState()}
            FiguresList={completedCampaignGraph}
            completedList={completedList}
          />
        )
      ) : null}
    </CampaignWrap>
  );
}

const CampaignWrap = styled.div`
  width: 1440px;
  padding: 36px 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;

const CampaignInfoBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CampaignInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 670px;
`;

export default Campaign;
