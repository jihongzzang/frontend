import React from 'react';
import styled from 'styled-components';
import ChartType1 from './ChartComponents/ChartType1';
import ChartType2 from './ChartComponents/ChartType2';
import ChartType3 from './ChartComponents/ChartType3';

const InfluencerChartArea = () => {
  return (
    <Wrraper>
      <ChartType1 />
      <ChartType2 />
      <ChartType3 />
    </Wrraper>
  );
};

export default InfluencerChartArea;

const Wrraper = styled.div`
  margin: 0 3%;
  margin-top: 10px;
  width: 94%;
  height: 34.956%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
