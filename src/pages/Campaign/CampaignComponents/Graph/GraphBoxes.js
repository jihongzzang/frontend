import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';

function GraphBoxes({
  FiguresList,
  campaignState,
  BarThickness,
  FiguresClass,
  completedList,
}) {
  return (
    <GraphBoxesWrap>
      <GraphBox
        FiguresList={FiguresList}
        FiguresClass={FiguresClass}
        BarThickness={BarThickness}
        campaignState={campaignState}
      />
      <GraphBox
        FiguresList={FiguresList}
        FiguresClass={FiguresClass}
        BarThickness={BarThickness}
        campaignState={campaignState}
      />
    </GraphBoxesWrap>
  );
}

const GraphBoxesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GraphBoxes;
