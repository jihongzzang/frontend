import React from 'react';
import styled from 'styled-components';
import ChartType4 from './ChartComponents/ChartType4';
import ChartType5 from './ChartComponents/ChartType5';
import ChartType6 from './ChartComponents/ChartType6';
import ChartType7 from './ChartComponents/ChartType7';

const InfluencerChartAreaFooter = () => {
  return (
    <Wrraper>
      <ChartType4 />
      <ChartType5 />
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
