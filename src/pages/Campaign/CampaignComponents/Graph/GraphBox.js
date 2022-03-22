import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import theme from '../../../../styles/theme';
import { useRecoilValue } from 'recoil';
import { completionCampaignList } from '../../../../Atoms/campaignFetchDataState';
Chart.register(ChartDataLabels, ...registerables);

function GraphBox({ FiguresList, FiguresClass, BarThickness, campaignState }) {
  const [graph, setGraph] = useState(1);
  const handleGraph = e => {
    setGraph(e.target.value);
  };
  const findFigure = e => {
    if (e.primaryFigureId === graph) {
      return true;
    }
  };
  const completedList = useRecoilValue(completionCampaignList);
  const selectedFigure = FiguresClass.find(findFigure);
  const onGoingSelectedfigureData =
    FiguresList[selectedFigure?.dailyFigureData];
  const completedSelectedfigureData = FiguresList[selectedFigure?.figureName];

  const dateList = FiguresList.date_graph?.map(d => {
    return d.slice(0, 10);
  });

  const postingList = () => {
    if (selectedFigure?.dailyFigureData === 'count_post') {
      return true;
    }
  };

  const RoasList = () => {
    if (selectedFigure.dailyFigureData === 'ROAS') {
      return true;
    }
  };

  const sales = FiguresList?.sales_graph[0];
  const budget = completedList.slice(0, 2).map(a => {
    return a?.Campaign?.budget;
  });

  const roasFigures = budget.map(a => {
    return Math.floor((sales / a) * 100);
  });

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        align: 'start',
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
    },
    indexAxis: 'y',
    datalabels: {
      display: true,
      align: 'center',
      font: {
        weight: 'normal',
      },
    },
    maintainAspectRatio: true,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
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
              if (c.tick.label === '디스커버리 고어텍스 공유 바람막이') {
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
  };

  return (
    <GraphBoxWrap>
      <GraphDrop value={graph} onChange={handleGraph} List={FiguresClass} />
      <Graph>
        <Bar
          data={{
            labels: campaignState
              ? postingList()
                ? FiguresList.post_date
                : dateList
              : FiguresList?.campaign_name,
            datasets: [
              {
                label: selectedFigure?.figureTitle,
                backgroundColor: theme.palette.chartBlue0,
                borderWidth: 0,
                barThickness: BarThickness,
                data: campaignState
                  ? postingList()
                    ? FiguresList.count_post
                    : onGoingSelectedfigureData
                  : RoasList()
                  ? roasFigures
                  : completedSelectedfigureData,
                datalabels: {
                  align: 'start',
                  anchor: 'end',
                  color: theme.palette.white,
                },
              },
            ],
          }}
          options={options}
        />
      </Graph>
    </GraphBoxWrap>
  );
}

const GraphBoxWrap = styled.div`
  width: 670px;
  background-color: white;
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid #e1e1ef;
`;

const Graph = styled.div`
  margin-top: 10px;
  height: 360px;
`;

export default GraphBox;
