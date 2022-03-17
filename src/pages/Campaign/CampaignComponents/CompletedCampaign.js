import React from 'react';
import styled from 'styled-components';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './Graph/GraphBoxes';

function CompletedCampaign({ List, FiguresList }) {
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
      <GraphBoxes List={List} FiguresList={FiguresList} />
    </div>
  );
}

const CampaignRoas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

// const GraphBoxes = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
// `;

export default CompletedCampaign;
