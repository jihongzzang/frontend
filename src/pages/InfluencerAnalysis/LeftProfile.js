import React from 'react';
import { useRecoilValue } from 'recoil';
import { convertNumberToFixed } from '../../Hooks/convertData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import DataBox from '../../components/DataBox';
import styled from 'styled-components';
import { leftselectedInfluencer } from '../../Atoms/analysisState';

const LeftProfile = () => {
  const influencerData = useRecoilValue(leftselectedInfluencer);
  const followerData = {
    name: '팔로워 수',
    value: {
      1: influencerData[0].followers[influencerData[0].followers.length - 1]
        .value,
    },
    comparison: {
      1:
        influencerData[0].followers[influencerData[0].followers.length - 1]
          .value / influencerData[0].followers[0].value,
    },
  };

  const campaignDataMapping = {
    1: influencerData[0].insight_1.all,
  };

  const extractData1 = Object.values(campaignDataMapping[1]);

  const uiDataMapping = {
    likes: ['좋아요 수', extractData1[0], 600 / 100],
    comments: ['댓글 수', extractData1[1], 46 / 10],
    hashtag: ['해시태그전환', extractData1[3], 60 / 10],
    reach: ['도달', extractData1[4], 2000 / 600],
    exposure: ['노출', extractData1[5], 2000 / 800],
    engage: [
      '참여도(참여율)',
      extractData1[7] + '(' + extractData1[8] + '%)',
      646 / 110,
    ],
  };

  return (
    <ProfileWrapper>
      <Title>
        <h2>인플루언서 퍼포먼스 종합 리포트</h2>
      </Title>
      <Content>
        <ImgWrraper>
          <img src={influencerData[0].img} alt="프로필 사진" />
        </ImgWrraper>
        <ContentText>
          <span>이름 : {influencerData[0].kor_name}</span>
          <span>성별: {influencerData[0].gender[1]}</span>
          <span>나이: {influencerData[0].age}</span>
          <span>거주지: {influencerData[0].residence[1]}</span>
          <span>계약 상태: {influencerData[0].status[1]}</span>
          <span>계정 가치: {influencerData[0].account_value}</span>
        </ContentText>
        <DataWrraper>
          <StyledDataBox color="grey2" size="medium">
            <span>{followerData.name}</span>
            <>
              <span>{followerData.value[1]}</span>
              <span>
                {'전체기간 ' +
                  convertNumberToFixed(followerData.comparison[1]) +
                  '배'}
                <div>
                  <FontAwesomeIcon icon={faCaretUp} size="1x" />
                </div>
              </span>
            </>
          </StyledDataBox>
          {Object.values(uiDataMapping).map((data, idx) => {
            return (
              <StyledDataBox color="grey2" size="medium" key={idx}>
                <span>{data[0]}</span>
                <span>{data[1]}</span>
                <span>
                  {'전체기간 ' + convertNumberToFixed(data[2]) + '배'}
                  <div>
                    <FontAwesomeIcon icon={faCaretUp} size="1x" />
                  </div>
                </span>
              </StyledDataBox>
            );
          })}
        </DataWrraper>
      </Content>
    </ProfileWrapper>
  );
};

export default LeftProfile;

const ProfileWrapper = styled.div`
  margin: 0 3%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 94%;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  color: ${({ theme }) => theme.palette.black};
`;

const Title = styled.div`
  margin-left: 20px;
  margin-top: 6px;
  height: 14px;
  h2 {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 3px;
  margin-left: 20px;
  height: 125px;
`;

const ImgWrraper = styled.div`
  width: 120px;
  img {
    width: 100%;
    height: 96%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ContentText = styled.div`
  display: flex;
  width: 150px;
  height: 96%;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5em;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
`;

const DataWrraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: 100px;
  margin-right: 20px;
`;

const StyledDataBox = styled(DataBox)`
  width: 120px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.grey2};
  .fa-caret-down {
    color: ${({ theme }) => theme.palette.green};
  }
  .fa-caret-up {
    color: ${({ theme }) => theme.palette.red};
  }

  span:nth-child(2) {
    font-weight: 600;
    display: flex;
    div {
      margin-left: 3px;
    }
  }
  span:nth-child(3) {
    width: 100%;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    div {
      font-size: 18px;
      margin-left: 3px;
    }
  }
`;
