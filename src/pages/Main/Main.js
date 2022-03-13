import React, { useState } from 'react';
import SearchArea from './SearchArea';
import styled from 'styled-components';
import StateArea from './StateArea';
import SortArea from './SortArea';
import Card from './Card';
import SEARCH_LISTS from './SEARCH_LISTS';
import SORT_LISTS from './SORT_LISTS';

function Main() {
  const searchLists = SEARCH_LISTS;
  const sortLists = SORT_LISTS;
  const [selected, setSelected] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const changeSelectOptionHandler = e => {
    const { value } = e.target;
    setSelected(value);
  };

  const changeSelectOptionHandler2 = e => {
    const { value } = e.target;
    setSelectedState(value);
  };

  const changeSortOptionHandler = e => {
    const { value } = e.target;
    setSelectedSort(value);
  };
  return (
    <MainWrraper>
      <SearchArea
        searchLists={searchLists}
        selected={selected}
        selectedState={selectedState}
        changeSelectOptionHandler={changeSelectOptionHandler}
        changeSelectOptionHandler2={changeSelectOptionHandler2}
      />
      <StateArea selected={selected} />
      <SortArea
        sortLists={sortLists}
        selected={selected}
        selectedSort={selectedSort}
        changeSortOptionHandler={changeSortOptionHandler}
      />
      <Card selected={selected} />
    </MainWrraper>
  );
}

export default Main;

const MainWrraper = styled.div`
  padding-top: 36px;
  height: 954px;
  background: ${({ theme }) => theme.palette.pageBackground};
`;
