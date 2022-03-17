import React from 'react';
import styled from 'styled-components';
import ChartType1 from '../../components/ChartComponents/ChartType1';
import ChartType2 from '../../components/ChartComponents/ChartType2';
import ChartType3 from '../../components/ChartComponents/ChartType3';

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
  padding-top: 15px;
  width: 94%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
