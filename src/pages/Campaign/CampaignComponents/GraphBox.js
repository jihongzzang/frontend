import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import PRIMARY_FIGURES from './PRIMARY_FIGURES';
import FIGURE_GRAPH from './FIGURE_GRAPH';

function GraphBox({ width }) {
  const [graph, setGraph] = useState(1);
  const handleGraph = e => {
    setGraph(e.target.value);
  };

  function findFigure(e) {
    if (e.id == graph) {
      return true;
    }
  }
  const selectedFigure = PRIMARY_FIGURES?.find(findFigure);

  console.log(selectedFigure?.figureName);
  const labelsList = FIGURE_GRAPH[0];
  return (
    <GraphBoxWrap width={width}>
      <GraphDrop value={graph} onChange={handleGraph} List={PRIMARY_FIGURES} />
      <Graph>
        <Bar
          data={{
            labels: labelsList,
            datasets: [
              {
                label: selectedFigure.figureName,
                backgroundColor: '#5891E5',
                borderWidth: 0,
                // data: [65, 59, 80, 81, 56],
                data: FIGURE_GRAPH[graph],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20,
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
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const Graph = styled.div`
  border-radius: 50px;
`;

export default GraphBox;
