import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import theme from '../../../../styles/theme';

Chart.register(ChartDataLabels, ...registerables);

function GraphBox({
  width,
  FiguresList,
  FiguresClass,
  IndexAxis,
  BarThickness,
  campaignStatus,
  completedList,
}) {
  const [graph, setGraph] = useState(1);
  const handleGraph = e => {
    setGraph(e.target.value);
  };
  function findFigure(e) {
    if (e.primaryFigureId === graph) {
      return true;
    }
  }

  const selectedFigure = FiguresClass.find(findFigure);
  const onGoingSelectedfigureData =
    FiguresList[selectedFigure?.dailyFigureData];
  const completedSelectedfigureData = FiguresList[selectedFigure?.figureName];
  const dateList = FiguresList.date_graph?.map(d => {
    return d.slice(0, 10);
  });

  const postingList = () => {
    if (selectedFigure.dailyFigureData === 'count_post') {
      return true;
    }
  };

  const RoasList = () => {
    if (selectedFigure.dailyFigureData === 'ROAS') {
      return true;
    }
  };

  // const test = () => {
  //   if (FiguresList?.campaign_name === completedList?.Campaign?.name) {
  //     return(

  //     )
  //   }
  // };

  return (
    <GraphBoxWrap width={width}>
      <GraphDrop value={graph} onChange={handleGraph} List={FiguresClass} />
      <Graph>
        <Bar
          data={{
            labels: campaignStatus
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
                data: campaignStatus
                  ? postingList()
                    ? FiguresList.count_post
                    : onGoingSelectedfigureData
                  : RoasList()
                  ? FiguresList.sales_graph
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
            aspectRatio: campaignStatus ? 1.5 : 3,
            indexAxis: IndexAxis,
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
  width: ${props => props.width};
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
