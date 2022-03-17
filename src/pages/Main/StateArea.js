import React from 'react';
import styled from 'styled-components';
import Btn from '../../components/Btn';
import { STATE_LISTS } from '../../constantData/STATE_LISTS';

const StateArea = ({ selected }) => {
  const stateLists = STATE_LISTS;
  const renderUi = selected.length ? true : false;
  return (
    renderUi && (
      <StateWrraper>
        <ContentWrraper>
          {selected === 'campaign' && (
            <>
              {stateLists.campaign.map(({ id, korName }) => (
                <StyledBtn key={id}>{korName}</StyledBtn>
              ))}
            </>
          )}
          {selected === 'influencer' && (
            <>
              {stateLists.influencer.map(({ id, korName }) => (
                <StyledBtn key={id}>{korName}</StyledBtn>
              ))}
            </>
          )}
        </ContentWrraper>
      </StateWrraper>
    )
  );
};

export default StateArea;

const StateWrraper = styled.div`
  margin: 0 3%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 94%;
  height: 6.919%;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.searchBackground};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
`;

const ContentWrraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBtn = styled(Btn)`
  width: 15%;
  margin-right: 1.635%;
  height: 40px;
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  font-weight: 400;
  justify-content: center;
  color: ${({ theme }) => theme.palette.black};
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  :nth-child(1) {
    width: 20%;
  }
  :nth-child(7) {
    margin-right: 0;
  }
`;
