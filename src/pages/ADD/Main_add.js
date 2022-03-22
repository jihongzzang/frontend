import React from 'react';
import styled from 'styled-components';

function Main_add() {
  return (
    <MainWrap>
      <MainCampaignBoxes>
        <MainCampaignBox>1</MainCampaignBox>
        <MainCampaignBox>1</MainCampaignBox>
        <MainCampaignBox>1</MainCampaignBox>
      </MainCampaignBoxes>
    </MainWrap>
  );
}
const MainWrap = styled.div`
  width: 1440px;
  height: 900px;
  padding: 36px 3% 3% 3%;
  background-color: ${({ theme }) => theme.palette.pageBackground};
`;

const MainCampaignBoxes = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainCampaignBox = styled.div`
  width: 400px;
  background-color: white;
`;
export default Main_add;
