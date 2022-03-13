import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBox from './GraphBox';

function CompletedCampaign() {
  return (
    <div>
      <CampaignPrimaryFigures FigureStandardText="*캠페인 기간동안 총 증가량" />
      <CampaignRoas>
        <span>Campaign Marketing ROAS</span>
      </CampaignRoas>
      <GraphBoxes>
        <GraphBox width="49.16%">one</GraphBox>
        <GraphBox width="49.16%">two</GraphBox>
      </GraphBoxes>
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
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const GraphBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default CompletedCampaign;
