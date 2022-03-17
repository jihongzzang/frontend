import React from 'react';
import DataBox from '../../components/DataBox';
import RankerBox from '../../components/RankerBox';
import styled from 'styled-components';

const AsideCategory = () => {
  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>과거에 진행했던 캠페인목록</h2>
        </LegendDataBox>
        <TableDataBox size="medium" color="black">
          <h4>번호</h4>
          <h4>캠페인 명</h4>
          <h4>참여율</h4>
        </TableDataBox>
        <TableContent>
          {pastCampaignData.map(({ kor_name, engagement_rate, id }, idx) => {
            return (
              <DataWrraper key={id}>
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
                    <span>{kor_name}</span>
                  </div>
                  <div>
                    <span>{engagement_rate}%</span>
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

export default AsideCategory;

const pastCampaignData = [
  {
    id: 1,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 21시즌 겨울 신상',
    engagement_rate: 7.2,
  },
  {
    id: 2,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 21시즌 가을 신상',
    engagement_rate: 8.3,
  },
  {
    id: 3,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 21시즌 여름 신상',
    engagement_rate: 9.1,
  },
  {
    id: 4,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 21시즌 봄 신상',
    engagement_rate: 11.2,
  },
  {
    id: 5,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 20시즌 겨울 신상',
    engagement_rate: 5.2,
  },
  {
    id: 6,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 20시즌 가을 신상',
    engagement_rate: 4.3,
  },
  {
    id: 7,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 20시즌 가을 신상',
    engagement_rate: 5.3,
  },
  {
    id: 8,
    campaign_name: 'discovery21ss',
    kor_name: '디스커버리 20시즌 가을 신상',
    engagement_rate: 6.1,
  },
];

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
  width: 25%;
  display: flex;
  flex-direction: column;
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
  padding: 0 18px;
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
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
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
