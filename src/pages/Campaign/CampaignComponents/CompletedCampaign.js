import React from 'react';
import styled from 'styled-components';
import GraphBoxes from './Graph/GraphBoxes';

function CompletedCampaign({ List, FiguresList, campaignStatus }) {
  return (
    <div>
      <CampaignRoas>
        <ExplainationROAS>
          캠페인 기간동안의 (매출 ÷ 마케팅 비용) × 100
        </ExplainationROAS>
        <span>Campaign Marketing ROAS : </span>
        <RoasFigure>
          {' '}
          {Math.floor(
            (2147798430 / List?.Campaign?.budget) * 100
          ).toLocaleString()}{' '}
          %
        </RoasFigure>
      </CampaignRoas>
      {/* <GraphBoxes List={List} FiguresList={FiguresList} /> */}
    </div>
  );
}

const CampaignRoas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid #e1e1ef;
`;
const ExplainationROAS = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  color: ${({ theme }) => theme.palette.grey};
  margin-right: 10px;
`;

const RoasFigure = styled.span`
  margin-left: 5px;
  font-size: ${({ theme }) => theme.fontsize.fontSize6};
  color: ${({ theme }) => theme.palette.navNoneActive};
  font-weight: 600;
`;
export default CompletedCampaign;
