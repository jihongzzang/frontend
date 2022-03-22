import React from 'react';
import SearchArea from './SearchArea';
import styled from 'styled-components';
import StateArea from './StateArea';
import SortArea from './SortArea';
import Card from './Card';
import SEARCH_LISTS from '../../constantData/SEARCH_LISTS';
import { SORT_LISTS } from '../../constantData/SORT_LISTS';
import { useRecoilState } from 'recoil';
import { listCategory, listSortCriteria, listState } from '../../Atoms/list';

function List() {
  const searchLists = SEARCH_LISTS;
  const sortLists = SORT_LISTS;
  const [selected, setSelected] = useRecoilState(listCategory);
  const [selectedState, setSelectedState] = useRecoilState(listState);
  const [selectedSort, setSelectedSort] = useRecoilState(listSortCriteria);

  const changeSelectOptionHandler = e => {
    const { value } = e.target;
    setSelected(value);
    setSelectedSort('');
  };

  const changeSelectOptionHandler2 = e => {
    const { value } = e.target;
    setSelectedState(value);
  };

  const changeSortOptionHandler = e => {
    const { value } = e.target;
    setSelectedSort(value);
  };

  const isRender = selected.length ? true : false;

  return (
    <ListWrraper>
      <SearchArea
        searchLists={searchLists}
        selected={selected}
        selectedState={selectedState}
        changeSelectOptionHandler={changeSelectOptionHandler}
        changeSelectOptionHandler2={changeSelectOptionHandler2}
      />
      {isRender && (
        <>
          <StateArea selected={selected} />
          <SortArea
            sortLists={sortLists}
            selectedSort={selectedSort}
            changeSortOptionHandler={changeSortOptionHandler}
          />
        </>
      )}
      {selectedState && <Card selected={selected} />}
    </ListWrraper>
  );
}

export default List;

const ListWrraper = styled.div`
  width: 1440px;
  padding-top: 36px;
  height: 954px;
  background: ${({ theme }) => theme.palette.pageBackground};
`;
