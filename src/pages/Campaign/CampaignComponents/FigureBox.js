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
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const FigureNameText = styled.span`
  color: ${({ theme }) => theme.palette.navNoneActive};
  white-space: pre-wrap;
  margin: 5px 0;
`;

const FigureText = styled.span`
  color: ${({ theme }) => theme.palette.navNoneActive};
  margin: 5px 0;
`;

export default FigureBox;
