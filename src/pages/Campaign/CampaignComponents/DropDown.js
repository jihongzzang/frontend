import React from 'react';
import styled from 'styled-components';

function DropDown() {
  return <DropDownBox>dropDown</DropDownBox>;
}

const DropDownBox = styled.form`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

export default DropDown;
