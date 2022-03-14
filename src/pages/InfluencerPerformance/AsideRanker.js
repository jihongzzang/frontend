import React from 'react';
import styled from 'styled-components';
import DataBox from '../../components/DataBox';

const AsideRanker = () => {
  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>캠페인 인플루언서 퍼포먼스 상위 3인 (참여율기준)</h2>
        </LegendDataBox>
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
