import React from 'react';
import DataBox from '../../components/DataBox';
import RankerBox from '../../components/RankerBox';
import styled from 'styled-components';
import { today } from '../../Atoms/campaignFetchDataState';
import { useRecoilValue } from 'recoil';
import { parsingCampaignData } from '../../Atoms/campaignFetchDataState';

const CompletionCampaignList = () => {
  const todayData = useRecoilValue(today);
  const campaignList = useRecoilValue(parsingCampaignData);
  const completion = campaignList.filter(a => {
    return a.Campaign.end_at < todayData;
  });

  const completionList = completion.sort(function (a, b) {
    if (a.Campaign.end_at > b.Campaign.end_at) {
      return 1;
    }
    if (a.Campaign.end_at < b.Campaign.end_at) {
      return -1;
    }
  });

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>현재 완료된 캠페인 (총 {completionList.length} 건)</h2>
        </LegendDataBox>
        <TableDataBox size="medium" color="black">
          <h4>순서</h4>
          <h4>캠페인 명</h4>
          <h4>마감일</h4>
        </TableDataBox>
        <TableContent>
          {completionList.map((campaign, idx) => {
            return (
              <DataWrraper key={campaign.Campaign.id}>
                <CustomCampaignBox
                  fullWidth
                  color="borderColor"
                  outline
                  className="hello"
                >
                  <div>
                    <span>{idx + 1}.</span>
                  </div>
                  <div>
                    <span>{campaign.Campaign.name}</span>
                  </div>
                  <div>
                    <span>~ {campaign.Campaign.end_at}</span>
                  </div>
                </CustomCampaignBox>
              </DataWrraper>
            );
          })}
        </TableContent>
      </Header>
    </StyledDataBox>
  );
};

export default CompletionCampaignList;

const TableContent = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDataBox = styled(DataBox)`
  background: white;
  height: 165px;
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`;

const Header = styled.div`
  width: 100%;
`;

const TableDataBox = styled(DataBox)`
  background: white;
  height: 20px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.black};
  justify-content: space-between;
  padding: 0 30px 0 18px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  h4 {
    font-size: ${({ theme }) => theme.fontsize.fontSize1};
  }
`;

const LegendDataBox = styled(DataBox)`
  background: white;
  height: 40px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.black};
  justify-content: center;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
  }
`;

const DataWrraper = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding: 10px;
  padding-right: 0;
  /* height: 30%; */
`;

const CustomCampaignBox = styled(RankerBox)`
  justify-content: space-between;
  border: 0;
  border-radius: 0;
  padding: 0 10px;
  height: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.black};

  div:nth-child(1) {
    width: 15%;
    font-weight: 500;
  }
  div:nth-child(2) {
    width: 70%;
    font-weight: 500;
  }
  div:nth-child(3) {
    width: 25%;
    font-weight: 500;
    text-align: center;
  }
`;
