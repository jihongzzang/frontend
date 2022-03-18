import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import PRIMARY_FIGURES from './PRIMARY_FIGURES';

function CampaignPrimaryFigures({ List, FigureStandardText }) {
  PRIMARY_FIGURES[0].figureValue = List?.sum_hashtag?.toLocaleString();
  PRIMARY_FIGURES[1].figureValue = List?.count_post?.toLocaleString();
  PRIMARY_FIGURES[2].figureValue = List?.total_official_visit?.toLocaleString();
  PRIMARY_FIGURES[3].figureValue =
    List?.total_official_follower?.toLocaleString();
  PRIMARY_FIGURES[4].figureValue =
    List?.total_official_referrer?.toLocaleString();
  PRIMARY_FIGURES[5].figureValue = (2147798430).toLocaleString() + '원';

  return (
    <BigFiguresBox>
      <FigureStandard>
        * {FigureStandardText} 기준, 전 일 대비 증가량
      </FigureStandard>
      <FigureBoxes>
        {PRIMARY_FIGURES.map(f => {
          return (
            <FigureBox
              key={f.primaryFigureId}
              width="15vw"
              height="12vh"
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
