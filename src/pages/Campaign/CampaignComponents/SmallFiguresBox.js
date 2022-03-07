import React from 'react';
import styled from 'styled-components';
import SmallFigureBox from './SmallFigureBox';

function SmallFiguresBox() {
  return (
    <SmallFigures>
      <SmallFigureBox FigureName="평균 좋아요 수" Figure="1,500" />
      <SmallFigureBox FigureName="평균 댓글 수" Figure="1,500" />
      <SmallFigureBox FigureName="평균 노출" Figure="1,500" />
      <SmallFigureBox FigureName="평균 참여" Figure="1,500" />
      <SmallFigureBox FigureName="마케팅 비용" Figure="1,500" />
    </SmallFigures>
  );
}
const SmallFigures = styled.div`
  display: flex;
`;
export default SmallFiguresBox;
