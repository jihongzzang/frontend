import React from 'react';
import styled from 'styled-components';

const NotingSelect = () => {
  return (
    <Wrraper>
      <Campaign />
      <Campaign />
      <Campaign>
        <span>데이터를 선택해주세요</span>
      </Campaign>
      <Campaign />
      <Campaign />
    </Wrraper>
  );
};

export default NotingSelect;

const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20;
  color: ${({ theme }) => theme.palette.grey};
  background: white;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  height: 700px;
  padding: 0 10px;
`;

const Campaign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  margin: 5px 20px;
  background: ${({ theme }) => theme.palette.pageBackground};
  opacity: 40%;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  padding: 0 20px;
  :nth-child(1) {
    margin-top: 10px;
  }
  :nth-child(5) {
    margin-bottom: 10px;
  }
  span {
    color: ${({ theme }) => theme.palette.black};
    font-size: 20px;
  }
`;
