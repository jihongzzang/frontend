import React from 'react';
import styled from 'styled-components';

function SmallFigureBox({ FigureName, Figure }) {
  return (
    <SmallFigure>
      <FigureNameText>{FigureName}</FigureNameText>
      <FigureText>{Figure}</FigureText>
    </SmallFigure>
  );
}
const SmallFigure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 90px;
  background-color: pink;
  margin: 0 5px;
  border-radius: 12px;
`;

const FigureNameText = styled.span`
  color: brown;
`;

const FigureText = styled.span`
  color: blue;
`;

export default SmallFigureBox;
