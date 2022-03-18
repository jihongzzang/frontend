import React from 'react';
import { useRecoilValue } from 'recoil';
import { renderState } from '../../Atoms/selectedState';
import LeftProfile from './LeftProfile';
import LeftSearch from './LeftSearch';
import styled from 'styled-components';
import ChartType4 from '../../components/ChartComponents/ChartType4';
import ChartType5 from '../../components/ChartComponents/ChartType5';

const LeftContent = () => {
  const renderCondition = useRecoilValue(renderState);
  return (
    <Left>
      <LeftSearch />
      {renderCondition && (
        <>
          <LeftProfile />
          <CenterWrraper>
            <ChartType4 />
            <ChartType5 />
          </CenterWrraper>
        </>
      )}
    </Left>
  );
};

export default LeftContent;

const Left = styled.div`
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
