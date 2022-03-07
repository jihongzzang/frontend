import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';

function Feeds() {
  return (
    <FeedsBox>
      <Feed imgWidth="150px" imgHeight="150px" />
      <Feed imgWidth="120px" imgHeight="120px" />
      <Feed imgWidth="120px" imgHeight="120px" />
      <Feed imgWidth="120px" imgHeight="120px" />
    </FeedsBox>
  );
}

const FeedsBox = styled.div`
  display: flex;

  align-items: center;
  height: 200px;
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

export default Feeds;
