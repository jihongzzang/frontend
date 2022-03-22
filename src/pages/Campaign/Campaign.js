import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DropDown from './CampaignComponents/DropDown';
import CampaignInformationFigures from './CampaignComponents/CampaignInformationFigures';
import CampaignInformation from './CampaignComponents/CampaignInformation';
import CampaignPrimaryFigures from './CampaignComponents/CampaignPrimaryFigures';
import CompletedCampaignRoas from './CampaignComponents/CompletedCampaignRoas';
import { selectedCampaignIdState } from '../../Atoms/campaignState';
import {
  completionCampaignGraphList,
  proceedingCampaignGraphList,
  renderCampaignData,
  uiChangeCondition,
  parsingCampaignData,
} from '../../Atoms/campaignFetchDataState';
import GraphBoxes from './CampaignComponents/Graph/GraphBoxes';
import { PRIMARY_FIGURES } from './CampaignComponents/FIGURES';
import NotingSelect from '../../components/NotingSelect';

function Campaign() {
  const proceedingCampaignGraph = useRecoilValue(proceedingCampaignGraphList);
  const completedCampaignGraph = useRecoilValue(completionCampaignGraphList);
  const [selectedCampaignId, setSelectedCampaignId] = useRecoilState(
    selectedCampaignIdState
  );

  const campaignList = useRecoilValue(parsingCampaignData);
  const list = useRecoilValue(renderCampaignData);
  const uiChange = useRecoilValue(uiChangeCondition);

  const handleCampaignValue = e => {
    setSelectedCampaignId(e.target.value);
  };

  const proceedingFigures = PRIMARY_FIGURES.slice(
    0,
    PRIMARY_FIGURES.length - 1
  );

  return (
    <CampaignWrap>
      <CampaignInfoBoxWrap>
        <CampaignInfoBox>
          <DropDown
            dropDownList={campaignList}
            value={selectedCampaignId}
            onChange={handleCampaignValue}
          />
          {selectedCampaignId && <CampaignInformation List={list} />}
        </CampaignInfoBox>
        {selectedCampaignId && <CampaignInformationFigures List={list} />}
      </CampaignInfoBoxWrap>
      {selectedCampaignId < 1 && (
        <Wrraper>
          <NotingSelect />
        </Wrraper>
      )}
      <CampaignPrimaryFigures
        List={list}
        completedCampaignList={completedCampaignGraph}
        dailyList={proceedingCampaignGraph}
        PRIMARY_FIGURES={PRIMARY_FIGURES}
      />
      {selectedCampaignId && !uiChange && <CompletedCampaignRoas List={list} />}
      {selectedCampaignId ? (
        uiChange ? (
          <GraphBoxes
            campaignState={uiChange}
            FiguresList={proceedingCampaignGraph}
            FiguresClass={proceedingFigures}
            BarThickness="10"
          />
        ) : (
          <GraphBoxes
            campaignState={uiChange}
            FiguresList={completedCampaignGraph}
            FiguresClass={PRIMARY_FIGURES}
            BarThickness="30"
          />
        )
      ) : null}
    </CampaignWrap>
  );
}

const CampaignWrap = styled.div`
  width: 1440px;
  height: 900px;
  padding: 36px 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;

const Wrraper = styled.div`
  margin-top: 30px;
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
