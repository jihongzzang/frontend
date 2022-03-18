import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredInfluencer, selectedWeeks } from '../../Atoms/selectedState';
import { chartData6, chartData11 } from '../../Atoms/chartData';
import { rightFilteredInfluencer } from '../../Atoms/analysisState';
import { convertWeeks } from '../../Hooks/convertWeeks';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DataBox from '../DataBox';
import styled from 'styled-components';
import theme from '../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

const ChartType12 = () => {
  const flow = useRecoilValue(chartData6);
  const flow2 = useRecoilValue(chartData11);
  const week = useRecoilValue(selectedWeeks);

  const convertArr = Object.values(flow);
  const convertArr2 = Object.values(flow2);

  const parsingData = {
    [week]: convertArr.slice(1, convertWeeks(week, flow)),
  };

  const parsingData2 = {
    [week]: convertArr2.slice(1, convertWeeks(week, flow2)),
  };

  const targetName = useRecoilValue(filteredInfluencer);
  const comParisonName = useRecoilValue(rightFilteredInfluencer);
  const renderName = [targetName[0].kor_name, comParisonName[0].kor_name];

  const renderData = parsingData[week].map(
    ele => (ele.fromhastagClick / ele.exposure) * 100
  );
  const renderData2 = parsingData2[week].map(
    ele => (ele.fromhastagClick / ele.exposure) * 100
  );
  const renderData3 = week === 'all' && renderData.pop();
  const renderData4 = week === 'all' && renderData2.pop();

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
            return value.toFixed(0) + '%';
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
        ticks: {
          font: {
            size: c => {
              if (c.index === 0) {
                return theme.fontsize.fontSize1;
              } else {
                return theme.fontsize.fontSize1;
              }
            },
          },
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
        bottom: 15,
        left: 20,
        right: 20,
      },
    },
  };

  const data =
    week === 'all'
      ? {
          labels: renderName,
          datasets: [
            {
              data: [renderData3, renderData4],
              label: '참여율',
              border: '0',
              backgroundColor: c => {
                if (c.index === 0) {
                  return theme.palette.chartGreen;
                } else {
                  return theme.palette.chartBlue0;
                }
              },
              barThickness: 30,
              datalabels: {
                color: theme.palette.black,
              },
            },
          ],
        }
      : {
          labels: ['1주차', '2주차', '3주차', '4주차'],
          datasets: [
            {
              data: renderData,
              label: '유입률',
              border: '0',
              backgroundColor: c => {
                if (c.index % 2 === 1) {
                  return theme.palette.chartGreen;
                }
                if (c.index % 2 === 0) {
                  return theme.palette.chartGreen;
                }
              },
              categoryPercentage: 0.8,
              barPercentage: 0.6,
              datalabels: {
                color: theme.palette.black,
              },
            },
            {
              data: renderData2,
              label: '유입률',
              border: '0',
              backgroundColor: theme.palette.chartBlue0,
              categoryPercentage: 0.8,
              barPercentage: 0.6,
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
            해시태그로 인한 광고게시물 유입률 <span>(주차별)</span>
          </h2>
        </LegendDataBox>
      </Header>
      <Content>
        <Bar data={data} options={options} width={270} height={180} />
      </Content>
    </StyledDataBox>
  );
};

export default ChartType12;

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
