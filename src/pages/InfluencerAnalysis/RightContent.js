import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { renderState2 } from '../../Atoms/selectedState';
import RightSearch from './RightSearch';
import RightProfile from './RightProfile';
import ChartType9 from '../../components/ChartComponents/ChartType9';
import ChartType10 from '../../components/ChartComponents/ChartType10';

const RightConent = () => {
  const renderCondition = useRecoilValue(renderState2);

  return (
    <Right>
      <RightSearch />
      {renderCondition && (
        <>
          <RightProfile />
          <CenterWrraper>
            <ChartType9 />
            <ChartType10 />
          </CenterWrraper>
        </>
      )}
    </Right>
  );
};

export default RightConent;

const Right = styled.div`
  width: 50%;
`;

const CenterWrraper = styled.div`
  margin-left: 3%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 94%;
  color: ${({ theme }) => theme.palette.black};
`;
