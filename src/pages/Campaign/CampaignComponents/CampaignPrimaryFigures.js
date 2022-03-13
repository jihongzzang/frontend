import React from 'react';
import styled from 'styled-components';
import FigureBox from './FigureBox';

function CampaignPrimaryFigures({ FigureStandardText }) {
  return (
    <BigFiguresBox>
      <FigureStandard>{FigureStandardText}</FigureStandard>
      <FigureBoxes>
        {/* TODO
        map으로 돌린다. */}
        <FigureBox
          width="220px"
          height="100px"
          FigureName="#캠페인 태그 검색 횟수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="#캠페인 태그 게시물 총 갯수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="공식 계정 방문 횟수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="공식 계정 팔로워 수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="공식 계정을 통해 공식 사이트 방문 횟수"
          Figure="1,500"
        />
        <FigureBox
          width="220px"
          height="100px"
          FigureName="공식 사이트 매출"
          Figure="1,500"
        />
      </FigureBoxes>
    </BigFiguresBox>
  );
}

const BigFiguresBox = styled.div`
  margin-top: 15px;
`;

const FigureStandard = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
`;

const FigureBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export default CampaignPrimaryFigures;
