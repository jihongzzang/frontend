import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { completionCampaignGraphList } from '../../../Atoms/campaignFetchDataState';
function CompletedCampaignRoas({ List }) {
  const completedCampaignGraph = useRecoilValue(completionCampaignGraphList);

  const getSales = () => {
    if (List?.Campaign?.name === completedCampaignGraph?.campaign_name[0]) {
      return completedCampaignGraph?.sales_graph[0];
    }
    if (List?.Campaign?.name === completedCampaignGraph?.campaign_name[1]) {
      return completedCampaignGraph?.sales_graph[1];
    }
  };

  return (
    <CampaignRoas>
      <ExplainationROAS>
        캠페인 기간동안의 (매출 ÷ 마케팅 비용) × 100
      </ExplainationROAS>
      <span>Campaign Marketing ROAS : </span>
      <RoasFigure>
        {Math.floor(
          (getSales() / List?.Campaign?.budget) * 100
        ).toLocaleString()}{' '}
        %
      </RoasFigure>
    </CampaignRoas>
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

export default CompletedCampaignRoas;
