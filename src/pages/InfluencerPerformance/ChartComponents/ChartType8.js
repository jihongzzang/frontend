import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../../Atoms/selectedState';
import { chartData6 } from '../../../Atoms/chartData';
import { convertWeeks2 } from '../../../Hooks/convertWeeks';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../../../components/DataBox';
import styled from 'styled-components';
import theme from '../../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType8 = () => {
  const engagementData = useRecoilValue(chartData6);
  const week = useRecoilValue(selectedWeeks);
  const convertArr = Object.values(engagementData);
  const parsingData = {
    [week]: convertArr.slice(1, convertWeeks2(week, convertArr)),
  };

  const renderData = parsingData[week].map(ele => ele.engagement_rate);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
        displayColors: false,
      },
      datalabels: {
        display: true,
        font: {
          weight: 'normal',
        },
        align: 'top',
        anchor: 'end',
        formatter: value => {
          if (value !== 0) {
            return value + '%';
          } else {
            return value;
          }
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        grid: {
          display: true,
          color: theme.palette.lightGrey,
        },
      },
      y: {
        grid: {
          display: true,
          color: theme.palette.lightGrey,
        },
        ticks: {
          font: {
            size: c => {
              if (c.index === 0) {
                return theme.fontsize.fontSize1;
              } else {
                return theme.fontsize.fontSize1;
              }
            },
            weight: c => {
              if (c.index === 0) {
                return 'bold';
              } else {
                return 'normal';
              }
            },
          },
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    layout: {
      padding: {
        top: 30,
        bottom: 10,
        left: 20,
        right: 20,
      },
    },
  };

  const data = {
    labels: ['1주차', '2주차', '3주차', '4주차'],
    datasets: [
      {
        data: renderData,
        label: '참여율',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return theme.palette.chartBlue0;
          } else {
            return theme.palette.chartBlue0;
          }
        },
        barThickness: 20,
        datalabels: {
          color: theme.palette.black,
        },
      },
    ],
  };

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>
            현 캠페인 참여율 <span>(주차별)</span>
          </h2>
        </LegendDataBox>
      </Header>
      <Content>
        <Bar data={data} options={options} width={270} height={180} />
      </Content>
    </StyledDataBox>
  );
};

export default ChartType8;
const StyledDataBox = styled(DataBox)`
  background: white;
  width: 32.6%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const LegendDataBox = styled(DataBox)`
  background: white;
  height: 40px;
  padding: 0;
  margin-right: 10px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.black};
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    span {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontsize.fontSize1};
    }
  }
`;
