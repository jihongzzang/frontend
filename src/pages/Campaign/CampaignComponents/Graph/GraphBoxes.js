import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';
import OnGraphBox from './OnGraphBox';
import PRIMARY_FIGURES from '../PRIMARY_FIGURES';

function GraphBoxes({ List, FiguresList }) {
  const campaignStatus = List?.campaign_status === '진행 중';

  return (
    <GraphBoxesWrap>
      {campaignStatus ? (
        <>
          <OnGraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="20"
          />
          <OnGraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="x"
            BarThickness="20"
          />
          {/* <OnGraphBox
            width="32.2%"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="y"
            BarThickness="20"
          /> */}
        </>
      ) : (
        <>
          <GraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="x"
            BarThickness="30"
          />
          <GraphBox
            width="46.65vw"
            FiguresList={FiguresList}
            FiguresClass={PRIMARY_FIGURES}
            IndexAxis="x"
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
