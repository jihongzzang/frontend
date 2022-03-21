import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';
import { PRIMARY_FIGURES } from '../FIGURES';

function GraphBoxes({ FiguresList, campaignStatus, dailyList, completedList }) {
  const proceedingFigures = PRIMARY_FIGURES.slice(
    0,
    PRIMARY_FIGURES.length - 1
  );
  return (
    <GraphBoxesWrap>
      {campaignStatus ? (
        <>
          <GraphBox
            width="670px"
            FiguresList={dailyList}
            FiguresClass={proceedingFigures}
            IndexAxis="y"
            BarThickness="10"
            campaignStatus={campaignStatus}
          />
          <GraphBox
            width="670px"
            FiguresList={dailyList}
            FiguresClass={proceedingFigures}
            IndexAxis="y"
            BarThickness="10"
            campaignStatus={campaignStatus}
          />
        </>
      ) : (
        <>
          <GraphBox
            width="670px"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="30"
            campaignStatus={campaignStatus}
            completedList={completedList}
          />
          <GraphBox
            width="670px"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="30"
            campaignStatus={campaignStatus}
            completedList={completedList}
          />
        </>
      )}
    </GraphBoxesWrap>
  );
}

const GraphBoxesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GraphBoxes;
