import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import SECONDARY_FIGURES from './SECONDARY_FIGURES';
import { convertNumber } from '../../../Hooks/convertData';

function CampaignSecondaryFigures({ List }) {
  SECONDARY_FIGURES[0].figureValue =
    convertNumber(List?.budget)?.toLocaleString() + '만원';
  SECONDARY_FIGURES[1].figureValue = Math.floor(
    List?.average_like
  )?.toLocaleString();
  SECONDARY_FIGURES[2].figureValue = Math.floor(
    List?.average_comment
  )?.toLocaleString();
  SECONDARY_FIGURES[3].figureValue = Math.floor(
    List?.average_exposure
  )?.toLocaleString();
  SECONDARY_FIGURES[4].figureValue = Math.floor(
    List?.average_like + List?.average_comment
  ).toLocaleString();

  return (
    <SmallFigures>
      {SECONDARY_FIGURES.map(f => {
        return (
          <FigureBox
            key={f.secondaryFigureId}
            width="9vw"
            height="9.5vh"
            FigureName={f.figureName}
            Figure={f.figureValue}
            money={f.money}
          />
        );
      })}
    </SmallFigures>
  );
}
const SmallFigures = styled.div`
  display: flex;
  justify-content: space-between;
  width: 46.65vw;
`;
export default CampaignSecondaryFigures;
