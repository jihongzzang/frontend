import React from 'react';
import styled, { css } from 'styled-components';

const DataBox = ({ children, color, outline, fullWidth, size, ...rest }) => {
  return (
    <StyledBox
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};
export default DataBox;

DataBox.defaultProps = {
  color: 'white',
  size: 'medium',
};

const colorStyles = css`
  ${({ theme, color, outline }) => css`
    background: ${theme.palette[color]};
    ${outline &&
    css`
      color: ${theme.palette[color]};
      background: none;
      border: 1px solid ${theme.palette[color]};
    `}
  `}
`;

const SIZES = {
  medium: {
    height: '120px',
    fontSize: '14px',
  },
  large: {
    height: '330px',
    fontSize: '14px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${SIZES[size].height};
    font-size: ${SIZES[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;
