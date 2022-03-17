import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import PRIMARY_FIGURES from './PRIMARY_FIGURES';

function CampaignPrimaryFigures({ List, FigureStandardText }) {
  PRIMARY_FIGURES[0].figureValue = List?.total_hashtag.toLocaleString();
  PRIMARY_FIGURES[1].figureValue = List?.count_post.toLocaleString();
  PRIMARY_FIGURES[2].figureValue = List?.official_visit.toLocaleString();
  PRIMARY_FIGURES[3].figureValue = List?.official_follower.toLocaleString();
  PRIMARY_FIGURES[4].figureValue = List?.official_referrer.toLocaleString();
  PRIMARY_FIGURES[5].figureValue = (20000000).toLocaleString();

  return (
    <BigFiguresBox>
      <FigureStandard>{FigureStandardText}</FigureStandard>
      <FigureBoxes>
        {PRIMARY_FIGURES.map(f => {
          return (
            <FigureBox
              width="15vw"
              height="12vh"
              FigureName={f.figureTitle}
              Figure={f.figureValue}
              money={f.money}
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
