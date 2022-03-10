import React from 'react';
import styled from 'styled-components';
import Btn from '../../components/Btn';

const StateArea = ({ selected }) => {
  return (
    <StateWrraper>
      {selected === 'influencer' ? (
        <div>
          <StyledBtn>계정명</StyledBtn>
          <StyledBtn>계약상태</StyledBtn>
          <StyledBtn>팔로워 수</StyledBtn>
          <StyledBtn>좋아요 수</StyledBtn>
          <StyledBtn>댓글 수</StyledBtn>
          <StyledBtn>노출</StyledBtn>
          <StyledBtn>참여/참여율</StyledBtn>
        </div>
      ) : (
        <div>
          <StyledBtn>캠페인</StyledBtn>
          <StyledBtn>캠페인상태</StyledBtn>
          <StyledBtn>기간</StyledBtn>
          <StyledBtn>평균 좋아요 수</StyledBtn>
          <StyledBtn>평균 댓글 수</StyledBtn>
          <StyledBtn>평균 노출</StyledBtn>
          <StyledBtn>평균 참여/참여율</StyledBtn>
        </div>
      )}
    </StateWrraper>
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
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.searchBackground};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};

  div {
    width: 100%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
