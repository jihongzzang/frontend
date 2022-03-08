import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';

function Feeds() {
  return (
    <FeedsBox>
      <Feed feedWidth="300px" imgWidth="150px" imgHeight="150px" />
      <SmallFeedsWrap>
        <span>
          캠페인 참여 게시물 순위 ((좋아요 + 댓글 수) 기준 / 매일 업데이트)
        </span>
        <SmallFeeds>
          {/* TODO 
         map으로 구현 */}
          <Feed feedWidth="240px" imgWidth="120px" imgHeight="120px" />
          <Feed feedWidth="240px" imgWidth="120px" imgHeight="120px" />
          <Feed feedWidth="240px" imgWidth="120px" imgHeight="120px" />
          <Feed feedWidth="240px" imgWidth="120px" imgHeight="120px" />
        </SmallFeeds>
      </SmallFeedsWrap>
    </FeedsBox>
  );
}

const FeedsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid #e1e1ef;
`;

const SmallFeedsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const SmallFeeds = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Feeds;
