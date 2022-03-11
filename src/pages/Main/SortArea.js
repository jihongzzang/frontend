import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortArea = ({
  selected,
  sortLists,
  selectedSort,
  changeSortOptionHandler,
}) => {
  const renderUi = selected.length ? true : false;
  return (
    renderUi && (
      <SortWrraper>
        <FormControl className="formControl" size="small">
          <InputLabel className="inputLabel" shrink={false}>
            {selectedSort ? '' : '분류기준'}
          </InputLabel>
          <Select value={selectedSort} onChange={changeSortOptionHandler}>
            {sortLists.map(({ id, name, korName }) => {
              return (
                <MenuItem key={id} value={name} name={name}>
                  {korName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </SortWrraper>
    )
  );
};

export default SortArea;

const SortWrraper = styled.div`
  margin: 0 3%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  width: 94%;

  .formControl {
    background: ${({ theme }) => theme.palette.white};
    width: 150px;
    border-radius: 4px;
  }

  .MuiSelect-select {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.black};
    text-align: center;
  }

  .inputLabel {
    width: 100%;
    left: 31px;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    color: ${({ theme }) => theme.palette.black};
  }
`;
