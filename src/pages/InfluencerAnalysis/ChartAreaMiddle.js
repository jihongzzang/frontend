import React from 'react';
import ChartType11 from '../../components/ChartComponents/ChartType11';
import ChartType12 from '../../components/ChartComponents/ChartType12';
import ChartType13 from '../../components/ChartComponents/ChartType13';
import styled from 'styled-components';

const ChartAreaMiddle = () => {
  return (
    <ChartAreaMiddleWrraper>
      <ChartType11 />
      <ChartType12 />
      <ChartType13 />
    </ChartAreaMiddleWrraper>
  );
};

export default ChartAreaMiddle;

const ChartAreaMiddleWrraper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
`;
