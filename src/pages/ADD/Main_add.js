import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { proceedingCampaignList } from '../../Atoms/campaignFetchDataState';

function Main_add() {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Main_add>
      <MainTitle>
        <span>지난 3개월간 진행된 캠페인 퍼포먼스 순위 현황</span>
      </MainTitle>
      <RankingBoxes>
        {CAMPAIGN_RANKING.map(r => {
          return <RankingBox key={r.id}>r.rankingTitle</RankingBox>;
        })}
      </RankingBoxes>
    </Main_add>
  );
}

const CAMPAIGN_RANKING = [
  { id: 1, rankingTitle: '캠페인 태그 검색 횟수' },
  { id: 2, rankingTitle: '캠페인 태그 게시물 갯수' },
  { id: 3, rankingTitle: '캠페인 평균 노출' },
  { id: 4, rankingTitle: '캠페인 평균 참여' },
  { id: 5, rankingTitle: '캠페인 ROAS' },
];
const MainTitle = styled.div`
  background-color: white;
`;

const RankingBoxes = styled.div`
  display: flex;
`;

const RankingBox = styled.div`
  background-color: white;
`;

export default Main_add;
