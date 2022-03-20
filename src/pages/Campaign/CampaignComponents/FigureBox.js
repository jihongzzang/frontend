import React from 'react';
import styled from 'styled-components';

function FigureBox({ width, height, FigureName, Figure, money }) {
  return (
    <FigureBoxWrap width={width} height={height}>
      <FigureNameText>{FigureName}</FigureNameText>
      <FigureText>{Figure}</FigureText>
    </FigureBoxWrap>
  );
}
const FigureBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  border: 1px solid #e1e1ef;
`;

const FigureNameText = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  color: ${({ theme }) => theme.palette.darkGrey};
  white-space: pre-wrap;
  text-align: center;
  line-height: 18px;
  margin-bottom: 5px;
`;

const FigureText = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.navNoneActive};
  font-weight: 500;
`;

export default FigureBox;
