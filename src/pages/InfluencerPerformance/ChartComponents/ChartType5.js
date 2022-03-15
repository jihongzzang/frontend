import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../../Atoms/selectedState';
import { chartData5 } from '../../../Atoms/chartData';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../../../components/DataBox';
import styled from 'styled-components';
import theme from '../../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType5 = () => {
  const followersTransitionData = useRecoilValue(chartData5);
  const week = useRecoilValue(selectedWeeks);

  const sliceNum = week => {
    if (week === '1st') {
      return 2;
    }
    if (week === '2nd') {
      return 3;
    }
    if (week === '3rd') {
      return 4;
    }
    if (week === '4th') {
      return 5;
    }
    if (week === 'all') {
      return followersTransitionData.length;
    }
  };

  const parsingData = {
    [week]: followersTransitionData.slice(0, sliceNum(week)),
  };

  const renderData = parsingData[week].map(ele => ele.value);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      datalabels: {
        display: true,
        align: 'top',
        font: {
          weight: 'normal',
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
          beginAtZero: true,
          stepSize: 500,
          font: {
            size: c => {
              if (c.index === 0) {
                return theme.fontsize.fontSize1;
              } else {
                return theme.fontsize.fontSize1;
              }
            },
            weight: c => {
              if (c.index === sliceNum(week)) {
                return 'normal';
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
    layout: { padding: 15 },
  };

  const data = {
    labels: ['초기', '1주차', '2주차', '3주차', '4주차'],
    datasets: [
      {
        data: renderData,
        label: '팔로워 수',
        borderWidth: 2,
        backgroundColor: theme.palette.chartRed2,
        borderColor: theme.palette.chartRed2,
        pointRadius: 1.5,
        datalabels: {
          color: theme.palette.black,
          font: {
            size: theme.fontsize.fontSize0,
          },
        },
      },
    ],
  };

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>팔로워 추이</h2>
        </LegendDataBox>
      </Header>
      <Content>
        <Line data={data} options={options} width={300} height={280} />
      </Content>
    </StyledDataBox>
  );
};

export default ChartType5;
const StyledDataBox = styled(DataBox)`
  background: white;
  width: 22%;
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
`;
