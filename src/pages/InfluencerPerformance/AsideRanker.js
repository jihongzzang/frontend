import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../Atoms/selectedState';
import { influencerTop3 } from '../../Atoms/influencerTop3';
import DataBox from '../../components/DataBox';
import RankerBox from '../../components/RankerBox';
import styled from 'styled-components';

const AsideRanker = () => {
  const data = useRecoilValue(influencerTop3);
  const week = useRecoilValue(selectedWeeks);
  const renderData = [...data]
    .sort(
      (a, b) =>
        b.insight_1[week].engagement_rate - a.insight_1[week].engagement_rate
    )
    .slice(0, 3);

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>캠페인 인플루언서 퍼포먼스 상위 3인 (참여율기준)</h2>
        </LegendDataBox>
        {renderData.map((influencer, idx) => {
          return (
            <DataWrraper key={influencer.id}>
              <Number>{idx + 1}.</Number>
              <CustomRankerBox
                fullWidth
                color="borderColor"
                outline
                className="hello"
              >
                <img src={influencer.img} alt="프로필 사진" />
                <span>{influencer.kor_name}</span>
                <span>{influencer.insight_1[week].engagement_rate}%</span>
              </CustomRankerBox>
            </DataWrraper>
          );
        })}
      </Header>
    </StyledDataBox>
  );
};

export default AsideRanker;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 23%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
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
  span {
    padding: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.grey};
  }
  span:nth-child(1) {
    color: ${({ theme }) => theme.palette.chartRed};
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.palette.chartYellow};
  }
  span:nth-child(5) {
    color: ${({ theme }) => theme.palette.chartGreen};
  }
  span:nth-child(7) {
    color: ${({ theme }) => theme.palette.chartBlue};
  }
  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
  }
`;

const DataWrraper = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding: 10px;
  height: 97px;
`;

const Number = styled.span`
  font-size: 24px;
  width: 30px;
`;

const CustomRankerBox = styled(RankerBox)`
  background: white;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.black};

  span {
    :nth-child(2) {
      padding-right: 60px;
    }
    :nth-child(3) {
      font-size: 24px;
      font-weight: 600;
    }
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
