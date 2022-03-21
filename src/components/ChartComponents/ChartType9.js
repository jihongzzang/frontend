import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../Atoms/selectedState';
import { chartData9 } from '../../Atoms/chartData';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../DataBox';
import styled from 'styled-components';
import theme from '../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType9 = () => {
  const followersRateData = useRecoilValue(chartData9);
  const week = useRecoilValue(selectedWeeks);
  const parsingData = {
    all: followersRateData[followersRateData.length - 1],
    '1st': followersRateData[1],
    '2nd': followersRateData[2],
    '3rd': followersRateData[3],
    '4th': followersRateData[4],
  };

  const renderData = Object.entries(parsingData[week]);

  const comparisonGenderData =
    renderData[0][1] > renderData[1][1] ? '여성' : '남성';

  const comparisonPercentData =
    renderData[0][1] > renderData[1][1] ? true : false;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      datalabels: {
        display: true,
        align: 'center',
        font: {
          weight: 'normal',
        },
        formatter: value => {
          if (value !== 0) {
            return value + '%';
          } else {
            return value;
          }
        },
      },
    },
    cutout: 50,
    responsive: true,
    layout: { padding: 10 },
  };

  const data = {
    labels: ['여성', '남성'],
    datasets: [
      {
        data: [renderData[0][1], renderData[1][1]],
        label: '팔로워 성별 비율',
        backgroundColor: c => {
          if (c.index === 0) {
            return theme.palette.chartRed2;
          } else {
            return theme.palette.chartBlue3;
          }
        },
        offset: 5,
        datalabels: {
          color: theme.palette.white,
          font: {
            size: theme.fontsize.fontSize5,
            weight: 500,
          },
        },
      },
    ],
  };

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>
            팔로워 성별 비율 <span>(주차별)</span>
          </h2>
        </LegendDataBox>
      </Header>
      <Content>
        <Doughnut data={data} options={options} width={100} height={50} />
        <ChartInner>
          <div gender={comparisonGenderData}>{comparisonGenderData}</div>
          <div gender={comparisonGenderData}>
            {comparisonPercentData ? renderData[0][1] : renderData[1][1]}%
          </div>
        </ChartInner>
      </Content>
      <Footer>
        <FooterBox>
          <span>{renderData[1][1]}%</span>
          <span>남성</span>
        </FooterBox>
        <FooterBox>
          <span>{renderData[0][1]}%</span>
          <span>여성</span>
        </FooterBox>
      </Footer>
    </StyledDataBox>
  );
};

export default ChartType9;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 297.78px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

const LegendDataBox = styled(DataBox)`
  background: white;
  height: 40px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  padding: 0;
  margin-right: 10px;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.black};
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    span {
      font-size: ${({ theme }) => theme.fontsize.fontSize1};
      font-weight: 400;
    }
  }
`;

const Content = styled.div`
  margin: 0 auto;
  width: 240px;
  position: relative;
`;

const ChartInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(50, 50);
  width: 40%;
  height: 40%;
  border-radius: 50%;
  padding: 1.25em 0;
  line-height: 200%;
  z-index: 2;
  overflow: hidden;
  div {
    font-weight: bold;
    font-size: 20px;
    color: ${props =>
      props.children[0].props.gender === '남성' ? '#5969FF' : '#FF407B'};
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

const FooterBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  :nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
  span:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
  span:nth-child(2) {
    font-size: 13px;
  }
`;
