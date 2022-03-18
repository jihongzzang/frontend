import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';

function Feeds() {
  return (
    <FeedsBox>
      <Text>
        * 캠페인 참여 게시물 순위 ((좋아요 + 댓글 수) 기준 / 매일 업데이트)
      </Text>
      <FeedsWrap>
        <Feed feedWidth="30%" imgWidth="150px" imgHeight="150px" />
        <Feed feedWidth="30%" imgWidth="150px" imgHeight="150px" />
        <Feed feedWidth="30%" imgWidth="150px" imgHeight="150px" />
      </FeedsWrap>
    </FeedsBox>
  );
}

const FeedsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0 10px;
  padding: 0 0 10px 0;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  align-self: flex-end;
  margin: 10px 10px;
`;

const FeedsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Feeds;
