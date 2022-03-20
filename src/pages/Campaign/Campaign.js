import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompletedCampaign from './CampaignComponents/CompletedCampaign';
import OngoingCampaign from './CampaignComponents/OngoingCampaign';
import { formatDate } from '../../Hooks/convertData';
import { useRecoilState } from 'recoil';
import { campaignState } from '../../Atoms/campaignState';
import LIST from './CampaignComponents/LIST';
import DropDown from './CampaignComponents/DropDown';
import CampaignSecondaryFigures from './CampaignComponents/CampaignSecondaryFigures';
import CampaignInformation from './CampaignInformation';
import CampaignPrimaryFigures from './CampaignComponents/CampaignPrimaryFigures';

function Campaign() {
  const [state, setState] = useRecoilState(campaignState);
  const today = formatDate(new Date());
  const [proceeding, setProceeding] = useState([]);
  const [completion, setCompletion] = useState([]);
  // const [campaignList, setCampaignList] = useState([]);

  // const [completedCampaignList, setCompletedCampaignList] = useState([]);
  // useEffect(() => {
  //   fetch('http://172.1.6.129:8000/performance/proceeding?status_filter=all')
  //     .then(res => res.json())
  //     .then(res => {
  //       setProceeding(res);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch('http://172.1.6.129:8000/performance/completion?status_filter=all')
  //     .then(res => res.json())
  //     .then(res => {
  //       setCompletion(res);
  //     });
  // }, []);
  // const proceedingList = proceeding.filter(a => a?.Campaign?.end_at > today);
  // const completedList = completion.filter(a => a?.Campaign?.end_at < today);
  // const campaignList = completedList.concat(proceedingList);
  // console.log(campaignList);
  const campaignList = LIST;

  function findCampaign(e) {
    if (campaignList.indexOf(e) + 1 == state) {
      return true;
    }
  }
  const selectedCampaign = campaignList?.find(findCampaign);

  function defineState() {
    if (selectedCampaign?.Campaign?.end_at > today) {
      return true;
    } else if (selectedCampaign?.Campaign?.end_at < today) {
      return false;
    }
  }

  const campaignStates = defineState();
  const handleCampaignValue = e => {
    setState(e.target.value);
  };

  return (
    <CampaignWrap>
      {/* <CampaignInfoBox>
        {selectedCampaign ? (
          <CampaignPrimaryInfoBox>
            <DropDown
              dropDownList={campaignList}
              value={state}
              onChange={handle}
            />
            <CampaignPrimaryInfos>
              <CampaignState><span>{stateTag}</span></CampaignState>
              <CampaignPrimaryInfoText>
                <span>{selectedCampaign?.Campaign?.description}</span>
                <span>{selectedCampaign?.Campaign?.tag}</span>
                <CampaignPeriod>
                  {convertDate(selectedCampaign?.Campaign?.created_at)} ~{' '}
                  {convertDate(selectedCampaign?.Campaign?.end_at)}
                </CampaignPeriod>
              </CampaignPrimaryInfoText>
            </CampaignPrimaryInfos>
          </CampaignPrimaryInfoBox>
        ) : (
          <Roading>데이터를 받아옵니다.</Roading>
        )}
        <CampaignSecondaryFigures List={selectedCampaign} />
      </CampaignInfoBox> */}

      <CampaignInfoBox>
        <CampaignPrimaryInfoBox>
          <DropDown
            dropDownList={campaignList}
            value={state}
            onChange={handleCampaignValue}
          />
          {selectedCampaign ? (
            <CampaignInformation
              campaignStates={campaignStates}
              selectedCampaign={selectedCampaign}
            />
          ) : null}
        </CampaignPrimaryInfoBox>
        {selectedCampaign ? (
          <CampaignSecondaryFigures List={selectedCampaign} />
        ) : null}
      </CampaignInfoBox>
      <CampaignPrimaryFigures
        List={selectedCampaign}
        campaignStatus={defineState()}
      />
      {selectedCampaign ? (
        campaignStates ? (
          <OngoingCampaign
            List={selectedCampaign}
            campaignStatus={defineState()}
          />
        ) : (
          <CompletedCampaign
            List={selectedCampaign}
            campaignStatus={defineState()}
            // FiguresList={completedCampaignList}
          />
        )
      ) : null}

      {/* {campaignStates ? (
        <>
          <CampaignInfo
            List={selectedCampaign}
            dropDownList={campaignList}
            stateTag="진행 중"
            value={state}
            onChange={handle}
          />
          <OngoingCampaign
            List={selectedCampaign}
            campaignStatus={defineState()}
          />
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
          <CompletedCampaign
            List={selectedCampaign}
            FiguresList={completedCampaignList}
          />
        </>
      )} */}
    </CampaignWrap>
  );
}

const CampaignWrap = styled.div`
  width: 1440px;
  padding: 36px 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CampaignPrimaryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 670px;
`;

// const Roading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 670px;
//   padding-top: 10px;
//   font-size: ${({ theme }) => theme.fontsize.fontSize1};
//   color: ${({ theme }) => theme.palette.darkGrey};
// `;

export default Campaign;
