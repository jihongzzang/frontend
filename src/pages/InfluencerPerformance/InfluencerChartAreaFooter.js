import React from 'react';
import styled from 'styled-components';
import ChartType6 from './ChartComponents/ChartType6';
import ChartType7 from './ChartComponents/ChartType7';
import ChartType8 from './ChartComponents/ChartType8';

const InfluencerChartAreaFooter = () => {
  return (
    <Wrraper>
      <ChartType8 />
      <ChartType6 />
      <ChartType7 />
    </Wrraper>
  );
};

export default InfluencerChartAreaFooter;

const Wrraper = styled.div`
  margin: 0 3%;
  padding-top: 15px;
  width: 94%;
  height: 34.956%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
