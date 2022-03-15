import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBox from './GraphBox';
import { convertNumber } from '../../../Hooks/convertData';

function CompletedCampaign({ List }) {
  // const ROAS = List.budget.toLocaleString();
  return (
    <div>
      <CampaignPrimaryFigures
        List={List}
        FigureStandardText="*캠페인 기간동안 총 증가량"
      />
      <CampaignRoas>
        <span title="(매출 ÷ 마케팅 비용 × 100)">
          Campaign Marketing ROAS : 200%
        </span>
      </CampaignRoas>
      <GraphBoxes>
        <GraphBox width="46.65vw">one</GraphBox>
        <GraphBox width="46.65vw">two</GraphBox>
      </GraphBoxes>
    </div>
  );
}

const CampaignRoas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const GraphBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default CompletedCampaign;
