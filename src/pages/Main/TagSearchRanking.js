import React from 'react';
import DataBox from '../../components/DataBox';
import RankerBox from '../../components/RankerBox';
import styled from 'styled-components';
import { parsingCampaignData } from '../../Atoms/campaignFetchDataState';
import { useRecoilValue } from 'recoil';

const TopSearchRanking = () => {
  const campaignList = useRecoilValue(parsingCampaignData);
  const tagSearchRank = [...campaignList].sort(function (a, b) {
    if (a.sum_hashtag > b.sum_hashtag) {
      return -1;
    }
    if (a.sum_hashtag < b.sum_hashtag) {
      return 1;
    }
  });

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>캠페인 태그 검색 횟수 순위</h2>
        </LegendDataBox>
        <TableDataBox size="medium" color="black">
          <h4>순위</h4>
          <h4>캠페인 명</h4>
          <h4>수치</h4>
        </TableDataBox>
        <TableContent>
          {tagSearchRank.map((campaign, idx) => {
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
                    <span>{campaign?.Campaign?.name}</span>
                  </div>
                  <div>
                    <span>{campaign?.sum_hashtag?.toLocaleString()}</span>
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

export default TopSearchRanking;

const TableContent = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 430px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
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
  height: 30%;
`;

const CustomCampaignBox = styled(RankerBox)`
  justify-content: space-between;
  border: 0;
  border-radius: 0;
  padding: 0 10px;
  height: 30px;
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
    width: 15%;
    font-weight: 500;
    text-align: center;
  }
`;
