import React from 'react';
import styled from 'styled-components';
import TagSearchRanking from './TagSearchRanking';
import TagPostRanking from './TagPostRanking';
import AverageExposure from './AverageExposure';
import AverageParticipation from './AverageParticipation';
import RoasRanking from './RoasRanking';
import ProceedingCampaignList from './ProceedingCampaignList';
import CompletionCampaignList from './CompletionCampaignList';

function Main() {
  return (
    <MainWrap>
      <MainTitle>
        <h2>캠페인 퍼포먼스 순위 현황 (지난 3개월 기준)</h2>
      </MainTitle>
      <RankingBoxes>
        <CampaignList>
          <ProceedingCampaignList />
          <CompletionCampaignList />
        </CampaignList>
        <TagSearchRanking />
        <TagPostRanking />
        <AverageExposure />
        <AverageParticipation />
        <RoasRanking />
      </RankingBoxes>
    </MainWrap>
  );
}
const MainWrap = styled.div`
  width: 1440px;
  padding: 36px 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;
const MainTitle = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize3};
  }
`;

const RankingBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CampaignList = styled.div`
  width: 430px;
`;

export default Main;
