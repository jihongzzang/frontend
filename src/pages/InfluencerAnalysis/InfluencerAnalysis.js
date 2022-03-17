import React from 'react';
import styled from 'styled-components';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const InfluencerAnalysis = () => {
  return (
    <Wrraper>
      <LeftContent />
      <RightContent />
    </Wrraper>
  );
};

export default InfluencerAnalysis;

const Wrraper = styled.div`
  width: 1440px;
  height: 100%;
  padding-top: 15px;
  display: flex;
  background: ${({ theme }) => theme.palette.pageBackground};
`;
