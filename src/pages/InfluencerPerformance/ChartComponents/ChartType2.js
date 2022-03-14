import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import DataBox from '../../../components/DataBox';
import { useRecoilValue } from 'recoil';
import { chartData1, chartData2, chartData3 } from '../../../Atoms/chartData';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';

Chart.register(ChartDataLabels, ...registerables);

const ChartType2 = () => {
  const discoveryData = useRecoilValue(chartData1);
  const anotherData = useRecoilValue(chartData2);
  const theOtherData = useRecoilValue(chartData3);
  const reachsData = [
    discoveryData.value && discoveryData.value[4],
    anotherData.value && anotherData.value[4],
    theOtherData.value && theOtherData.value[4],
  ];
  const fromHastagData = [
    discoveryData.value && discoveryData.value[6],
    anotherData.value && anotherData.value[6],
    theOtherData.value && theOtherData.value[6],
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
        data: reachsData,
        label: '도달 수',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return '#008A89';
          } else {
            return '#008A89';
          }
        },
        barThickness: 18,
        datalabels: {
          color: 'white',
        },
        barPercentage: 0.5,
      },
      {
        data: fromHastagData,
        label: '해시태그로 인한 유입',
        border: '0',
        backgroundColor: c => {
          if (c.index === 0) {
            return '#00C0B1';
          } else {
            return '#00C0B1';
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
          <h2>노출영역에서 해시태그로 인한 유입정도</h2>
        </LegendDataBox>
        <LegendDataBox size="medium" color="black">
          <span>노출수</span>
          <span>|</span>
          <span>해시태그</span>
        </LegendDataBox>
      </Header>
      <Bar data={dataHorBar} options={options} width={300} height={200} />
    </StyledDataBox>
  );
};

export default ChartType2;

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
  }
`;
