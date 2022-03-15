import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedWeeks } from '../../../Atoms/selectedState';
import { chartData6 } from '../../../Atoms/chartData';
import { convertWeeks } from '../../../Hooks/convertWeeks';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../../../components/DataBox';
import styled from 'styled-components';
import theme from '../../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType6 = () => {
  const flowConversionData = useRecoilValue(chartData6);
  const week = useRecoilValue(selectedWeeks);
  const convertArr = Object.values(flowConversionData);
  const sliceData = convertArr.slice(1, convertArr.length - 1);

  const initailValue = { fromhastagClick: 0 };

  sliceData.unshift(initailValue);
  const parsingData = {
    [week]: sliceData.slice(0, convertWeeks(week, sliceData)),
  };

  const renderData = parsingData[week].map(ele => ele.fromhastagClick);

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
              if (c.index === convertWeeks(week, sliceData)) {
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
        label: '유입',
        borderWidth: 2,
        backgroundColor: theme.palette.chartGreen2,
        borderColor: theme.palette.chartGreen2,
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
          <h2>인사이트 노출 영역 해시태그로 인한 유입 추이</h2>
        </LegendDataBox>
      </Header>
      <Line data={data} options={options} width={300} height={200} />
    </StyledDataBox>
  );
};

export default ChartType6;
const StyledDataBox = styled(DataBox)`
  background: white;
  width: 26.3%;
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
