import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedCampaignState } from '../../../selectedCampaignState';

function DropDown({ dropDownList }) {
  const [state, setState] = useRecoilState(selectedCampaignState);

  const handleChange = e => {
    setState(e.target.value);
  };

  return (
    <DropDownBox>
      <label>
        <select value={state} onChange={handleChange}>
          {dropDownList?.map(campaign => {
            return (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            );
          })}
        </select>
      </label>
    </DropDownBox>
  );
}

const DropDownBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

export default DropDown;
