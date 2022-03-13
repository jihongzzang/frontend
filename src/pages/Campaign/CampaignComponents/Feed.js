import React from 'react';
import styled from 'styled-components';

function Feed({ feedWidth, imgWidth, imgHeight }) {
  return (
    <FeedBox feedWidth={feedWidth}>
      <FeedImgBox imgWidth={imgWidth} imgHeight={imgHeight}>
        <img
          alt="feedImg"
          src="https://images.pexels.com/photos/10998586/pexels-photo-10998586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </FeedImgBox>
      <FeedInfo>
        <span>인플루언서</span>
        <span>좋아요 댓글</span>
        <span>#해시태그</span>
      </FeedInfo>
    </FeedBox>
  );
}

const FeedBox = styled.div`
  width: ${props => props.feedWidth};
  display: flex;
  margin: 0 10px;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius4};
  border: 1px solid #e1e1ef;
`;

const FeedImgBox = styled.div`
  width: ${props => props.imgWidth};
  height: ${props => props.imgHeight};
  margin: 10px;
  overflow: hidden;
  img {
    width: 150px;
  }
`;

const FeedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
export default Feed;
