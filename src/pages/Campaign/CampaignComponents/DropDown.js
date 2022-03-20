import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function DropDown({ value, onChange, dropDownList }) {
  return (
    <FormControl size="small">
      <InputLabel className="inpitLabel" shrink={false}>
        {value ? '' : <InputTitle>캠페인을 선택해주세요.</InputTitle>}
      </InputLabel>
      <DropDownBox
        sx={{ borderRadius: '10px', borderColor: 'red' }}
        value={value}
        onChange={onChange}
        // input="test"
      >
        {dropDownList?.map(campaign => {
          return (
            <MenuItem
              key={campaign?.Campaign?.id}
              value={campaign?.Campaign?.id}
            >
              {campaign?.Campaign?.name}
            </MenuItem>
          );
        })}
      </DropDownBox>
    </FormControl>
  );
}

const DropDownBox = styled(Select)`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.white};
  text-align: center;
`;

const InputTitle = styled.div`
  font-size: 16px;
  margin-left: 240px;
`;
export default DropDown;
