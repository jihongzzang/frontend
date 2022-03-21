import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';
import { SECONDARY_FIGURES } from './FIGURES';
import { convertNumber } from '../../../Hooks/convertData';

function CampaignInformationFigures({ List }) {
  SECONDARY_FIGURES[0].figureValue =
    convertNumber(List?.Campaign?.budget).toLocaleString() + '만원';
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
      {List
        ? SECONDARY_FIGURES.map(f => {
            return (
              <FigureBox
                key={f.id}
                width="130px"
                height="70px"
                FigureName={f.figureName}
                Figure={f.figureValue}
              />
            );
          })
        : null}
    </SmallFigures>
  );
}
const SmallFigures = styled.div`
  display: flex;
  justify-content: space-between;
  width: 670px;
`;
export default CampaignInformationFigures;
