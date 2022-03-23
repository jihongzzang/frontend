import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';

function GraphBoxes({
  FiguresList,
  campaignState,
  BarThickness,
  FiguresClass,
}) {
  return (
    <GraphBoxesWrap marginBottom={campaignState && '70px'}>
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
  margin-bottom: ${props => props.marginBottom};
`;

export default GraphBoxes;
