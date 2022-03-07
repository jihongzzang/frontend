import React from 'react';
import styled from 'styled-components';

function FigureBox({ width, height, FigureName, Figure }) {
  return (
    <SmallFigure width={width} height={height}>
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
  width: ${props => props.width};
  height: ${props => props.height};
  /* width: 130px;
  height: 90px; */
  /* margin: 0 5px; */
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

const FigureNameText = styled.span`
  color: #5891e5;
`;

const FigureText = styled.span`
  color: #5891e5;
`;

export default FigureBox;
