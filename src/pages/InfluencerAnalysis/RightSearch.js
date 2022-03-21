import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  rightSelectedInfluencer,
  rightfilteredInfluencers,
} from '../../Atoms/analysisState';
import { selectedInfluencer } from '../../Atoms/selectedState';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Btn from '../../components/Btn';
import styled from 'styled-components';

const RightSearch = () => {
  const [influencer, setInfluencer] = useRecoilState(rightSelectedInfluencer);
  const comparativeInfluencers = useRecoilValue(rightfilteredInfluencers);
  const selectConditon = useRecoilValue(selectedInfluencer);
  const disabled = selectConditon ? false : true;

  const changeSelectOptionHandler2 = e => {
    const { value } = e.target;
    setInfluencer(value);
  };

  return (
    <SearchWrraper>
      <Title>
        <h2>비교대상 인플루언서 검색</h2>
      </Title>
      <Content>
        <div>
          <h4>비교대상 인플루언서</h4>
          <FormControl className="formControl" size="small">
            <InputLabel className="inputLabel" shrink={false}>
              {influencer ? '' : '목록'}
            </InputLabel>
            <Select
              value={influencer}
              onChange={changeSelectOptionHandler2}
              disabled={disabled}
            >
              {comparativeInfluencers.map(({ id, name, kor_name }) => {
                return (
                  <MenuItem key={id} value={name} name={name}>
                    {kor_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <StyledBtn color="darkGrey" outline>
          검색
        </StyledBtn>
      </Content>
    </SearchWrraper>
  );
};

export default RightSearch;

const SearchWrraper = styled.div`
  margin: 0 3%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 94%;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  color: ${({ theme }) => theme.palette.black};
`;

const Title = styled.div`
  margin-left: 20px;
  h2 {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 10px;

  div {
    h4 {
      margin-left: 20px;
      font-size: ${({ theme }) => theme.fontsize.fontSize1};
      font-weight: 600;
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
  margin-top: 18px;
  margin-left: 20px;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black};
  border: 1px solid #c4c4c3;

  :active {
    background: ${({ theme }) => theme.palette.lightGrey};
  }
  :hover {
    border: 1px solid ${({ theme }) => theme.palette.black};
  }
`;
