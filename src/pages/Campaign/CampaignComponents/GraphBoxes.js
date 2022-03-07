import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';

function GraphBoxes() {
  return (
    <GraphBoxesWrap>
      <GraphBox />
      <GraphBox />
      <GraphBox />
    </GraphBoxesWrap>
  );
}

const GraphBoxesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GraphBoxes;
