import React from 'react';
import styled from 'styled-components';
import CompletedGraphBox from './CompletedGraphBox';
import OnGoingGraphBox from './OnGoingGraphBox';
import PRIMARY_FIGURES from '../PRIMARY_FIGURES';
import { CHANGEDONGOING } from '../CHANGEDONGOING';

function GraphBoxes({ List, FiguresList }) {
  const campaignStatus = List?.campaign_status === '진행 중';
  const dailyList = CHANGEDONGOING[1];

  return (
    <GraphBoxesWrap>
      {campaignStatus ? (
        <>
          <OnGoingGraphBox
            width="46.65vw"
            FiguresList={dailyList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="10"
          />
          <OnGoingGraphBox
            width="46.65vw"
            FiguresList={dailyList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="10"
          />
        </>
      ) : (
        <>
          <CompletedGraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="30"
          />
          <CompletedGraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="30"
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
