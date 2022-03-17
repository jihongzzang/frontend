import React from 'react';
import { useRecoilValue } from 'recoil';
import { renderState } from '../../Atoms/selectedState';
import LeftProfile from './LeftProfile';
import LeftSearch from './LeftSearch';
import styled from 'styled-components';

const LeftContent = () => {
  const renderCondition = useRecoilValue(renderState);
  return (
    <Left>
      <LeftSearch />
      {renderCondition && <LeftProfile />}
    </Left>
  );
};

export default LeftContent;

const Left = styled.div`
  width: 50%;
`;
