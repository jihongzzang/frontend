import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

function GraphDrop({ value, onChange, List }) {
  return (
    <DropDownBox
      sx={{ borderRadius: '12px' }}
      value={value}
      onChange={onChange}
    >
      {List?.map(figure => {
        return (
          <MenuItem key={figure.primaryFigureId} value={figure.primaryFigureId}>
            {figure.figureTitle}
          </MenuItem>
        );
      })}
    </DropDownBox>
  );
}

const DropDownBox = styled(Select)`
  width: 100%;
  height: 4vh;
  background-color: ${({ theme }) => theme.palette.white};
  text-align: center;
`;

export default GraphDrop;
