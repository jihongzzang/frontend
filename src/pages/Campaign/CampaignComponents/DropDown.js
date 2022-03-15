import React from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

function DropDown({ value, onChange, dropDownList }) {
  return (
    <DropDownBox
      sx={{ borderRadius: '12px' }}
      value={value}
      onChange={onChange}
    >
      {dropDownList?.map(campaign => {
        return (
          <MenuItem key={campaign.id} value={campaign.id}>
            {campaign.name}
          </MenuItem>
        );
      })}
    </DropDownBox>
  );
}

const DropDownBox = styled(Select)`
  width: 100%;
  height: 4.5vh;
  background-color: ${({ theme }) => theme.palette.white};
  text-align: center;
`;

export default DropDown;
