import React from 'react';
import styled from 'styled-components';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import DropDown from './DropDown';

function GraphBox({ width, height }) {
  return (
    <GraphBoxWrap width={width} height={height}>
      <DropDown />
      <Graph>
        <Bar
          data={data}
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

const data = {
  labels: ['03/01', '03/02', '03/03', '03/04', '03/05'],
  datasets: [
    {
      label: '#캠페인 태그 검색 횟수',
      backgroundColor: '#5891E5',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
export default GraphBox;
