import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Btn from '../../components/Btn';

const SearchArea = ({
  searchLists,
  selected,
  selectedState,
  changeSelectOptionHandler,
  changeSelectOptionHandler2,
}) => {
  return (
    <SearchWrraper>
      <Title>
        <h2>검색</h2>
      </Title>
      <Content>
        <div>
          <h4>{searchLists[0].categoryType[1]}</h4>
          <FormControl className="formControl" size="small">
            <InputLabel className="inputLabel" shrink={false}>
              {selected ? '' : '검색할 카테고리 (캠페인 / 인플루언서)'}
            </InputLabel>
            <Select value={selected} onChange={changeSelectOptionHandler}>
              {searchLists[0].optionLists.map(({ id, name, korName }) => {
                return (
                  <MenuItem key={id} value={name} name={name}>
                    {korName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div>
          <h4>{searchLists[1].categoryType[1]}</h4>
          <FormControl className="formControl" size="small">
            <InputLabel className="inputLabel" shrink={false}>
              {selectedState ? '' : '상태를 선택해주세요'}
            </InputLabel>
            <Select value={selectedState} onChange={changeSelectOptionHandler2}>
              {selected === 'campaign'
                ? searchLists[1].optionLists[0].map(({ id, name, korName }) => {
                    return (
                      <MenuItem key={id} value={name} name={name}>
                        {korName}
                      </MenuItem>
                    );
                  })
                : searchLists[1].optionLists[1].map(({ id, name, korName }) => {
                    return (
                      <MenuItem key={id} value={name} name={name}>
                        {korName}
                      </MenuItem>
                    );
                  })}
            </Select>
          </FormControl>
        </div>
        <div>
          <StyledBtn color="borderColor" outline>
            검색
          </StyledBtn>
        </div>
      </Content>
    </SearchWrraper>
  );
};

export default SearchArea;

const SearchWrraper = styled.div`
  margin: 0 3%;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  width: 94%;
  height: 12.57%;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.searchBackground};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
`;

const Title = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  h2 {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.white};
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 10px;

  div {
    h4 {
      margin-left: 20px;
      font-size: ${({ theme }) => theme.fontsize.fontSize2};
      font-weight: 600;
      color: ${({ theme }) => theme.palette.white};
    }
  }

  .formControl {
    background: ${({ theme }) => theme.palette.white};
    width: 260px;
    border-radius: 4px;
    margin-top: 5px;
    margin-left: 20px;
  }

  .MuiSelect-select {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.black};
  }

  .inputLabel {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.black};
  }
`;

const StyledBtn = styled(Btn)`
  margin-top: 20px;
  margin-left: 20px;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black};
  background: ${({ theme }) => theme.palette.white};

  :active {
    background: ${({ theme }) => theme.palette.lightGrey};
  }
`;
