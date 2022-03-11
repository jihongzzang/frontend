import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';

function CompletedCampaign() {
  return (
    <div>
      <CampaignPrimaryFigures FigureStandardText="*캠페인 기간동안 총 증가량" />
      <CampaignRoas>
        <span>Campaign Marketing ROAS</span>
      </CampaignRoas>
    </div>
  );
}

const CampaignRoas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

export default CompletedCampaign;
