import React from 'react';
import AsideRanker from './AsideRanker';
import styled from 'styled-components';
import ChartType4 from './ChartComponents/ChartType4';
import ChartType5 from './ChartComponents/ChartType5';
import AsideCategory from './AsideCategory';

const InfluencerFooter = () => {
  return (
    <Wrraper>
      <ChartType4 />
      <ChartType5 />
      <AsideRanker />
      <AsideCategory />
    </Wrraper>
  );
};

export default InfluencerFooter;

const Wrraper = styled.div`
  margin: 0 3%;
  padding-top: 15px;
  margin-bottom: 20px;
  width: 94%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
