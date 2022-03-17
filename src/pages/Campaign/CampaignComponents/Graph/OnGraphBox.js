import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import GraphDrop from './GraphDrop';
import theme from '../../../../styles/theme';
import { automaticDate, hashTag } from '../OngoingCampaignDailyFigures';

function GraphBox({
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
    if (e.id == graph) {
      return true;
    }
  }
  const selectedFigure = FiguresClass.find(findFigure);
  const selectedfigureData = FiguresList[selectedFigure.figureName];
  return (
    <GraphBoxWrap width={width}>
      <GraphDrop value={graph} onChange={handleGraph} List={FiguresClass} />
      <Graph>
        <Bar
          data={{
            // labels: FiguresList.campaign_name,
            labels: automaticDate,
            datasets: [
              {
                label: selectedFigure?.figureTitle,
                backgroundColor: 'blue',
                // backgroundColor: function (value) {
                //   if (value.include('고어텍스')) {
                //     return 'yellow';
                //   }
                //   return 'blue';
                // },
                borderWidth: 0,
                barThickness: 5,

                // data: selectedfigureData,
                data: hashTag,
              },
            ],
          }}
          options={{
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
  background-color: white;
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const Graph = styled.div`
  height: 400px;
  margin-top: 10px;
`;

export default GraphBox;
