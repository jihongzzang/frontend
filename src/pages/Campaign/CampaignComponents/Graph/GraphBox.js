import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import theme from '../../../../styles/theme';
Chart.register(ChartDataLabels, ...registerables);

function GraphBox({
  FiguresList,
  FiguresClass,
  BarThickness,
  campaignState,
  completedList,
}) {
  const [graph, setGraph] = useState(1);
  const handleGraph = e => {
    setGraph(e.target.value);
  };
  const findFigure = e => {
    if (e.primaryFigureId === graph) {
      return true;
    }
  };

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
  const sales = FiguresList?.sales_graph;
  const budget = [
    completedList?.[1]?.Campaign?.budget,
    completedList?.[0]?.Campaign?.budget,
  ];
  const roasFigures = [
    Math.floor((sales?.[0] / budget?.[0]) * 100),
    Math.floor((sales?.[1] / budget?.[1]) * 100),
  ];

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
                  ? [7903, 7159]
                  : completedSelectedfigureData,
                datalabels: {
                  align: 'start',
                  anchor: 'end',
                  color: theme.palette.white,
                },
              },
            ],
          }}
          options={{
            aspectRatio: campaignState ? 1.5 : 3,
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
              },
            },
            legend: {
              display: false,
              position: 'right',
            },
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
              },
            },
          }}
        />
      </Graph>
    </GraphBoxWrap>
  );
}

const GraphBoxWrap = styled.div`
  width: 670px;
  height: ${props => props.height};
  background-color: white;
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid #e1e1ef;
`;

const Graph = styled.div`
  margin-top: 10px;
`;

export default GraphBox;
