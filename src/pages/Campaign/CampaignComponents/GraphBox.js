import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

function GraphBox() {
  return (
    <GraphBoxWrap>
      <DropDown />
    </GraphBoxWrap>
  );
}

const GraphBoxWrap = styled.div`
  width: 32.2%;
  height: 440px;
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;
export default GraphBox;
