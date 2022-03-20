import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import PRIMARY_FIGURES from './PRIMARY_FIGURES';

function CampaignPrimaryFigures({ List, campaignStatus }) {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  function dateFormat(t) {
    let mm = t.getMonth() + 1; // getMonth() is zero-based
    let dd = t.getDate();

    return [
      t.getFullYear(),
      '년 ',
      (mm > 9 ? '' : '0') + mm,
      '월 ',
      (dd > 9 ? '' : '0') + dd,
      '일',
    ].join('');
  }
  const yesterdayDateFormat = dateFormat(yesterday);
  PRIMARY_FIGURES[0].figureValue = List?.sum_hashtag?.toLocaleString();
  PRIMARY_FIGURES[1].figureValue = List?.count_post?.toLocaleString();
  PRIMARY_FIGURES[2].figureValue = campaignStatus
    ? List?.daily_official_visit?.toLocaleString()
    : List?.total_official_visit?.toLocaleString();
  PRIMARY_FIGURES[3].figureValue = campaignStatus
    ? List?.daily_official_follower?.toLocaleString()
    : List?.total_official_follower?.toLocaleString();
  PRIMARY_FIGURES[4].figureValue = campaignStatus
    ? List?.daily_official_referrer?.toLocaleString()
    : List?.total_official_referrer?.toLocaleString();
  PRIMARY_FIGURES[5].figureValue = (2147798430).toLocaleString() + '원';

  return (
    <BigFiguresBox>
      <FigureStandard>
        *{' '}
        {campaignStatus
          ? yesterdayDateFormat + ' 기준, 전 일 대비 증가량'
          : '캠페인 기간동안 총 증가량'}
      </FigureStandard>
      <FigureBoxes>
        {PRIMARY_FIGURES.map(f => {
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
