import React from 'react';
import styled from 'styled-components';
import LeftProfile from './LeftProfile';
import LeftSearch from './LeftSearch';

const LeftContent = () => {
  return (
    <Left>
      <LeftSearch />
      {/* <LeftProfile /> */}
    </Left>
  );
};

export default LeftContent;

const Left = styled.div`
  width: 50%;
`;
