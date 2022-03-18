import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import theme from '../../../../styles/theme';
import { color } from '@mui/system';

Chart.register(ChartDataLabels, ...registerables);

function CompletedGraphBox({
  width,
  FiguresList,
  FiguresClass,
  IndexAxis,
  BarThickness,
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
  const completedSelectedfigureData = FiguresList[selectedFigure?.figureName];

  return (
    <GraphBoxWrap width={width}>
      <GraphDrop value={graph} onChange={handleGraph} List={FiguresClass} />
      <Graph>
        <Bar
          data={{
            labels: FiguresList.campaign_name,
            datasets: [
              {
                label: selectedFigure?.figureTitle,
                backgroundColor: theme.palette.chartBlue0,
                borderWidth: 0,
                barThickness: BarThickness,
                data: completedSelectedfigureData,
                datalabels: {
                  align: 'start',
                  anchor: 'end',
                  color: theme.palette.white,
                },
              },
            ],
          }}
          options={{
            aspectRatio: 3,
            indexAxis: IndexAxis,
            elements: {
              bar: {
                borderWidth: 0,
              },
            },
            legend: {
              display: true,
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
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const Graph = styled.div`
  margin-top: 10px;
`;

export default CompletedGraphBox;
