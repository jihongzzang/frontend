import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import { formatDateKo } from '../../../Hooks/convertData';
import { useRecoilValue } from 'recoil';
import {
  uiChangeCondition,
  proceedingCampaignPostGraph,
} from '../../../Atoms/campaignFetchDataState';

function CampaignPrimaryFigures({
  List,
  completedCampaignList,
  dailyList,
  PRIMARY_FIGURES,
}) {
  const proceedingFigures = PRIMARY_FIGURES.slice(
    0,
    PRIMARY_FIGURES.length - 1
  );
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const yesterdayDateFormat = formatDateKo(yesterday);
  const uiChange = useRecoilValue(uiChangeCondition);
  const proceedingPostFigure = useRecoilValue(proceedingCampaignPostGraph);
  const selectedIndex = completedCampaignList?.campaign_name?.indexOf(
    List?.Campaign?.name
  );
  const selectedSales = () => {
    if (selectedIndex === 0) {
      return completedCampaignList?.sales_graph[0];
    }
    if (selectedIndex === 1) {
      return completedCampaignList?.sales_graph[1];
    }
  };
  const selectedPosts = () => {
    if (selectedIndex === 0) {
      return completedCampaignList?.count_post[0];
    }
    if (selectedIndex === 1) {
      return completedCampaignList?.count_post[1];
    }
  };

  proceedingFigures[0].figureValue = List?.average_hashtag?.toLocaleString();
  proceedingFigures[1].figureValue = uiChange
    ? proceedingPostFigure?.count_post?.toLocaleString()
    : selectedPosts()?.toLocaleString();
  proceedingFigures[2].figureValue = uiChange
    ? List?.daily_official_visit?.toLocaleString()
    : List?.total_official_visit?.toLocaleString();
  proceedingFigures[3].figureValue = uiChange
    ? List?.daily_official_follower?.toLocaleString()
    : List?.total_official_follower?.toLocaleString();
  proceedingFigures[4].figureValue = uiChange
    ? List?.daily_official_referrer?.toLocaleString()
    : List?.total_official_referrer?.toLocaleString();
  proceedingFigures[5].figureValue = uiChange
    ? dailyList?.sales_graph?.[
        dailyList?.sales_graph?.length - 1
      ]?.toLocaleString() + '원'
    : selectedSales()?.toLocaleString() + '원';

  return (
    <BigFiguresBox>
      {List && (
        <>
          <FigureStandard>
            *
            {uiChange
              ? yesterdayDateFormat + ' 기준, 전 일 대비 증가량'
              : '캠페인 기간동안 총 증가량'}
          </FigureStandard>
          <FigureBoxes>
            {proceedingFigures.map(f => {
              return (
                <FigureBox
                  key={f.primaryFigureId}
                  width="216px"
                  height="85px"
                  FigureName={f.figureTitle}
                  Figure={f.figureValue}
                />
              );
            })}
          </FigureBoxes>
        </>
      )}
    </BigFiguresBox>
  );
}

const BigFiguresBox = styled.div`
  margin-top: 1vh;
`;

const FigureStandard = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.darkGrey};
`;

const FigureBoxes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CampaignPrimaryFigures;
