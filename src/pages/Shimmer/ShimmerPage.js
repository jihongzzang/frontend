import React from 'react';
import styled from 'styled-components';

const ShimmerPage = () => {
  return <Wrraper>ShimmerPage</Wrraper>;
};

export default ShimmerPage;

const Wrraper = styled.div`
  width: 200vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.grey};
`;
