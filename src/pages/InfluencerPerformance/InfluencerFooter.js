import React from 'react';
import AsideRanker from './AsideRanker';
import styled from 'styled-components';

const InfluencerFooter = () => {
  return (
    <Wrraper>
      <AsideRanker />
    </Wrraper>
  );
};

export default InfluencerFooter;

const Wrraper = styled.div`
  margin: 0 3%;
  padding-top: 15px;
  margin-bottom: 20px;
  width: 94%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.black};
`;
