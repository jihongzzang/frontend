import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchWrraper>
      <Title>
        <h2>검색</h2>
      </Title>
      <Content>
        <div>SearchBar</div>
        <div>SearchBar</div>
        <div>SearchBar</div>
      </Content>
    </SearchWrraper>
  );
};

export default SearchBar;

const SearchWrraper = styled.div`
  margin: 0 3%;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 94%;
  height: 12.57%;
  background-color: tomato;
`;

const Title = styled.div``;

const Content = styled.div``;
