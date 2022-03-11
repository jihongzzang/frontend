import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';

function GraphBoxes() {
  return (
    <GraphBoxesWrap>
      <GraphBox width="32.2%" height="440px" />
      <GraphBox width="32.2%" height="440px" />
      <GraphBox width="32.2%" height="440px" />
    </GraphBoxesWrap>
  );
}

const GraphBoxesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GraphBoxes;
