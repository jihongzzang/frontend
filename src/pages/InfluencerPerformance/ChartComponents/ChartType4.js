import React from 'react';
import { useRecoilValue } from 'recoil';
import { chartData4 } from '../../../Atoms/chartData';
import { selectedWeeks } from '../../../Atoms/selectedState';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../../../components/DataBox';
import styled from 'styled-components';
import { convertPercent } from '../../../Hooks/convertData';

const ChartType4 = () => {
  Chart.register(ChartDataLabels, ...registerables);
  const followersRateData = useRecoilValue(chartData4);
  const week = useRecoilValue(selectedWeeks);
  const parsingData = {
    all: followersRateData[followersRateData.length - 1],
    '1st': followersRateData[1],
    '2nd': followersRateData[2],
    '3rd': followersRateData[3],
    '4th': followersRateData[4],
  };

  const renderData = Object.entries(parsingData[week]);

  const options = {
    plugins: {
      legend: {
        display: false,
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
    cutout: 60,
    elements: {
      center: {
        text: 'Red is 2/3 the total numbers',
        color: 'black',
        fontStyle: 'Arial',
        sidePadding: 20,
        minFontSize: 20,
        lineHeight: 25,
      },
    },
    responsive: true,
    layout: { padding: 30 },
  };

  const data = {
    labels: [renderData[0][0], renderData[1][0]],
    datasets: [
      {
        data: [renderData[0][1], renderData[1][1]],
        label: '팔로워 성별 비율',
        backgroundColor: c => {
          if (c.index === 0) {
            return '#FF407B';
          } else {
            return '#5969FF';
          }
        },
        hoverOffset: 4,
        offset: 5,
        datalabels: {
          color: 'white',
          font: {
            size: 18,
            weight: 500,
          },
        },
      },
    ],
  };

  console.log(data);

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>팔로워 성별 비율</h2>
        </LegendDataBox>
      </Header>
      <Content>
        <Doughnut data={data} options={options} width={300} height={200} />
        <ChartInner>
          <div>여성</div>
          <div>55%</div>
        </ChartInner>
      </Content>
      <Footer>
        <div>
          <span>여성</span>
        </div>
        <div>
          <span>남성</span>
        </div>
      </Footer>
    </StyledDataBox>
  );
};

export default ChartType4;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 23%;
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
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 100%;
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
    color: ${({ theme }) => theme.palette.chartBlue3};
  }
`;

const Footer = styled.div`
  background: black;
`;
