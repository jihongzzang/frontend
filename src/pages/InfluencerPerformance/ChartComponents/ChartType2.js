import React from 'react';
import { useRecoilValue } from 'recoil';
import { chartData1, chartData2, chartData3 } from '../../../Atoms/chartData';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../../../components/DataBox';
import styled from 'styled-components';
import theme from '../../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType2 = () => {
  const discoveryData = useRecoilValue(chartData1);
  const anotherData = useRecoilValue(chartData2);
  const theOtherData = useRecoilValue(chartData3);
  const exposureData = [
    discoveryData.value && discoveryData.value[5],
    anotherData.value && anotherData.value[5],
    theOtherData.value && theOtherData.value[5],
  ];
  const hashtagData = [
    discoveryData.value && discoveryData.value[6],
    anotherData.value && anotherData.value[6],
    theOtherData.value && theOtherData.value[6],
  ];

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
        align: 'center',
        font: {
          weight: 'normal',
        },
        formatter: value => {
          if (value !== 0) {
            return value.toLocaleString() + '회';
          } else {
            return value;
          }
        },
      },
    },
    indexAxis: 'y',
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
        top: 10,
        bottom: 10,
        left: 10,
        right: 30,
      },
    },
  };
  const data = {
    labels: [discoveryData.hashtag, anotherData.hashtag, theOtherData.hashtag],
    datasets: [
      {
        data: exposureData,
        label: '노출 수',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return theme.palette.chartGreen;
          } else {
            return theme.palette.chartGreen;
          }
        },
        barThickness: 18,
        datalabels: {
          color: theme.palette.white,
        },
        barPercentage: 0.5,
      },
      {
        data: hashtagData,
        label: '해시태그로 인한 유입',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return theme.palette.chartGreen2;
          } else {
            return theme.palette.chartGreen2;
          }
        },
        barThickness: 18,
        datalabels: {
          color: theme.palette.white,
        },
      },
    ],
  };

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>
            노출영역에서 해시태그로 인한 유입정도&nbsp;<p>(주차별)</p>
          </h2>
        </LegendDataBox>
        <LegendDataBox size="medium" color="black">
          <span>노출수</span>
          <span>|</span>
          <span>해시태그</span>
        </LegendDataBox>
      </Header>
      <Bar data={data} options={options} width={300} height={200} />
    </StyledDataBox>
  );
};

export default ChartType2;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 32.6%;
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
  span {
    padding: 2px;
    font-weight: 500;
  }
  span:nth-child(1) {
    color: ${({ theme }) => theme.palette.chartGreen};
  }
  span:nth-child(2) {
    color: ${({ theme }) => theme.palette.grey};
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.palette.chartGreen2};
  }
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    display: flex;
    align-items: center;
    p {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontsize.fontSize1};
    }
  }
`;
