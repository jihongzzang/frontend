import React from 'react';
import styled from 'styled-components';
import ChartType4 from './ChartComponents/ChartType4';
import ChartType5 from './ChartComponents/ChartType5';
import ChartType6 from './ChartComponents/ChartType6';
import AsideRanker from './AsideRanker';

const InfluencerChartAreaFooter = () => {
  return (
    <Wrraper>
      <ChartType4 />
      <ChartType5 />
      <ChartType6 />
      <AsideRanker />
    </Wrraper>
  );
};

export default InfluencerChartAreaFooter;

const Wrraper = styled.div`
  margin: 0 3%;
  margin-top: 10px;
  width: 94%;
  height: 34.956%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
