import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

function Main() {
  return (
    <MainWrraper>
      <SearchBar />
      <div>Main</div>
    </MainWrraper>
  );
}

export default Main;

const MainWrraper = styled.div`
  height: 954px;
`;
