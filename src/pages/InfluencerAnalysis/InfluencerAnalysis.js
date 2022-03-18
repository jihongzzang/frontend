import React from 'react';
import { useRecoilValue } from 'recoil';

import { renderState2 } from '../../Atoms/selectedState';
import ChartAreaMiddle from './ChartAreaMiddle';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import styled from 'styled-components';
import NothingSelect from '../../components/NotingSelect';

const InfluencerAnalysis = () => {
  const renderCondition = useRecoilValue(renderState2);

  return (
    <Wrraper>
      <TopWrraper>
        <LeftContent />
        <RightContent />
      </TopWrraper>
      {renderCondition ? (
        <MiddleWrraper>
          <ChartAreaMiddle />
        </MiddleWrraper>
      ) : (
        <MiddleWrraper2>
          <NothingSelect />
        </MiddleWrraper2>
      )}
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

const MiddleWrraper = styled.div``;

const MiddleWrraper2 = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

const TopWrraper = styled.div`
  display: flex;
`;
