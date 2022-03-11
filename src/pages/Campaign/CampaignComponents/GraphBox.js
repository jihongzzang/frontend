import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

function GraphBox({ width, height }) {
  return (
    <GraphBoxWrap width={width} height={height}>
      <DropDown />
    </GraphBoxWrap>
  );
}

const GraphBoxWrap = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  /* width: ;
  height: ; */
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;
export default GraphBox;
