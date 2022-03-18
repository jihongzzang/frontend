import React from 'react';
import styled from 'styled-components';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const InfluencerAnalysis = () => {
  return (
    <Wrraper>
      <ContentWrraper>
        <LeftContent />
        <RightContent />
      </ContentWrraper>
    </Wrraper>
  );
};

export default InfluencerAnalysis;

const Wrraper = styled.div`
  width: 1440px;
  height: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.pageBackground};
`;

const Title = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 22px;
  margin-bottom: 15px;
`;

const ContentWrraper = styled.div`
  display: flex;
`;
