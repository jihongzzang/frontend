import React from 'react';
import styled from 'styled-components';
import LeftSearch from './LeftSearch';

const LeftContent = () => {
  return (
    <Left>
      <LeftSearch />
    </Left>
  );
};

export default LeftContent;

const Left = styled.div`
  width: 50%;
`;
