import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedCampaignState } from '../../../selectedCampaignState';
import { Select, MenuItem } from '@mui/material';
import { red } from '@mui/material/colors';

function DropDown({ dropDownList }) {
  const [state, setState] = useRecoilState(selectedCampaignState);

  const handleChange = e => {
    setState(e.target.value);
  };

  return (
    <DropDownBox
      sx={{ borderRadius: '12px' }}
      value={state}
      onChange={handleChange}
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
  height: 40px;
  /* border-radius: 12px; */
  //border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  /* border: 1px solid #e1e1ef; */
  text-align: center;
`;

export default DropDown;
