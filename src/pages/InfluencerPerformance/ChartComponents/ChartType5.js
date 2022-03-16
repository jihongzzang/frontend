import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../../Atoms/selectedState';
import { chartData5 } from '../../../Atoms/chartData';
import { convertWeeks } from '../../../Hooks/convertWeeks';
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

  const parsingData = {
    [week]: followersTransitionData.slice(
      0,
      convertWeeks(week, followersTransitionData)
    ),
  };

  const renderData = parsingData[week].map(ele => ele.value);

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
        align: 'top',
        font: {
          weight: 'normal',
        },
        formatter: value => {
          if (value !== 0) {
            return value.toLocaleString() + '명';
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
              if (c.index === convertWeeks(week, followersTransitionData)) {
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
    layout: {
      padding: {
        top: 30,
        bottom: 20,
        left: 10,
        right: 20,
      },
    },
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
          <h2>
            팔로워 추이 <span>(주차별)</span>
          </h2>
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
  width: 24%;
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
    span {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontsize.fontSize1};
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
`;
