import React, { useState } from 'react';
import styled from 'styled-components';

function DropDown() {
  const [state, setState] = useState('');

  const handleChange = e => {
    setState(e.target.value);
  };
  const handleSubmit = e => {
    console.log('this is ' + state);
  };

  return (
    <DropDownBox onSubmit={handleSubmit}>
      <label>
        <select value={state} onChange={handleChange}>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
      </label>
      <input type="submit" value="선택" />
    </DropDownBox>
  );
}

const DropDownBox = styled.form`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

export default DropDown;
