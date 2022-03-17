import React from 'react';
import styled from 'styled-components';
import RightSearch from './RightSearch';

const RightConent = () => {
  return (
    <Right>
      <RightSearch />
    </Right>
  );
};

export default RightConent;

const Right = styled.div`
  width: 50%;
`;
