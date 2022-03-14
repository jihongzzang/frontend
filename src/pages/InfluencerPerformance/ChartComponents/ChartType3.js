import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import DataBox from '../../../components/DataBox';
import { useRecoilValue } from 'recoil';
import { chartData1, chartData2, chartData3 } from '../../../Atoms/chartData';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';

Chart.register(ChartDataLabels, ...registerables);

const ChartType3 = () => {
  const discoveryData = useRecoilValue(chartData1);
  const anotherData = useRecoilValue(chartData2);
  const theOtherData = useRecoilValue(chartData3);
  const actionsData = [
    discoveryData.value && discoveryData.value[2],
    anotherData.value && anotherData.value[2],
    theOtherData.value && theOtherData.value[2],
  ];
  const hashtagClickData = [
    discoveryData.value && discoveryData.value[3],
    anotherData.value && anotherData.value[3],
    theOtherData.value && theOtherData.value[3],
  ];

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
      },
    },
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: c => {
              if (c.index === 0) {
                return 12;
              } else {
                return 12;
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
    layout: { padding: 10 },
  };

  const dataHorBar = {
    labels: [discoveryData.hashtag, anotherData.hashtag, theOtherData.hashtag],
    datasets: [
      {
        data: actionsData,
        label: '반응',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return '#0B008A';
          } else {
            return '#0B008A';
          }
        },
        barThickness: 18,
        datalabels: {
          color: 'white',
          font: {
            size: 12,
          },
        },
      },
      {
        data: hashtagClickData,
        label: '공식태그로 전환 수',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return '#AAA6D6';
          } else {
            return '#AAA6D6';
          }
        },
        barThickness: 18,
        datalabels: {
          color: 'white',
        },
      },
    ],
  };

  return (
    <StyledDataBox size="large" color="borderColor" outline>
      <Header>
        <LegendDataBox size="medium" color="black">
          <h2>반응 부분에서 전환률 정도</h2>
        </LegendDataBox>
        <LegendDataBox size="medium" color="black">
          <span>반응</span>
          <span>|</span>
          <span>전환정도</span>
        </LegendDataBox>
      </Header>
      <Bar data={dataHorBar} options={options} width={300} height={200} />
    </StyledDataBox>
  );
};

export default ChartType3;

const StyledDataBox = styled(DataBox)`
  background: white;
  width: 32%;
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
    color: ${({ theme }) => theme.palette.chartBlue};
  }
  span:nth-child(2) {
    color: ${({ theme }) => theme.palette.grey};
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.palette.chartBlue2};
  }

  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
  }
`;
