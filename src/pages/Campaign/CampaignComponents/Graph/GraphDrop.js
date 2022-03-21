import React from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

function GraphDrop({ value, onChange, List }) {
  return (
    <DropDownBox
      sx={{ borderRadius: '10px' }}
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
  height: 30px;
  background-color: ${({ theme }) => theme.palette.white};
  text-align: center;
`;

export default GraphDrop;
