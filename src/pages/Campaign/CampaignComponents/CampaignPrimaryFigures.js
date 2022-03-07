import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';

function CampaignPrimaryFigures() {
  return (
    <BigFiguresBox>
      <FigureStandard>*2022년 3월 2일 기준, 전 일 대비 증가량</FigureStandard>
      <FigureBoxes>
        {/* TODO
        map으로 돌린다. */}
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="평균 좋아요 수"
          Figure="1,500"
        />
      </FigureBoxes>
    </BigFiguresBox>
  );
}

const BigFiguresBox = styled.div`
  margin-top: 15px;
`;

const FigureStandard = styled.span`
  font-size: 12px;
`;

const FigureBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export default CampaignPrimaryFigures;
