import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';

function CampaignSecondaryFigures() {
  return (
    <SmallFigures>
      <FigureBox
        width="130px"
        height="90px"
        FigureName="평균 좋아요 수"
        Figure="1,500"
      />
      <FigureBox
        width="130px"
        height="90px"
        FigureName="평균 댓글 수"
        Figure="1,500"
      />
      <FigureBox
        width="130px"
        height="90px"
        FigureName="평균 노출"
        Figure="1,500"
      />
      <FigureBox
        width="130px"
        height="90px"
        FigureName="평균 참여"
        Figure="1,500"
      />
      <FigureBox
        width="130px"
        height="90px"
        FigureName="마케팅 비용"
        Figure="1,500"
      />
    </SmallFigures>
  );
}
const SmallFigures = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49.16%;
`;
export default CampaignSecondaryFigures;
