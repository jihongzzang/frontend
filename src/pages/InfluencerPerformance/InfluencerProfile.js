import React from 'react';
import styled from 'styled-components';
import DataBox from '../../components/DataBox';
import { convertNumberToFixed } from '../../Hooks/convertData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { filteredInfluencer, selectedWeeks } from '../../Atoms/selectedState';

const InfluencerProfile = () => {
  const influencerData = useRecoilValue(filteredInfluencer);
  const week = useRecoilValue(selectedWeeks);

  const followerData = {
    name: '팔로워 수',
    value: {
      1: influencerData[0].followers[influencerData[0].followers.length - 1]
        .value,
      2: influencerData[0].followers[1].value,
      3: influencerData[0].followers[2].value,
      4: influencerData[0].followers[3].value,
      5: influencerData[0].followers[4].value,
    },
    comparison: {
      1:
        influencerData[0].followers[influencerData[0].followers.length - 1]
          .value / influencerData[0].followers[0].value,
      2:
        influencerData[0].followers[1].value /
        influencerData[0].followers[0].value,
      3:
        influencerData[0].followers[2].value /
        influencerData[0].followers[1].value,
      4:
        influencerData[0].followers[3].value /
        influencerData[0].followers[2].value,
      5:
        influencerData[0].followers[4].value /
        influencerData[0].followers[3].value,
    },
  };

  const campaignDataMapping = {
    1: influencerData[0].insight_1.total_data,
    2: influencerData[0].insight_1['1st_weeks_data'],
    3: influencerData[0].insight_1['2nd_weeks_data'],
    4: influencerData[0].insight_1['3rd_weeks_data'],
    5: influencerData[0].insight_1['4th_weeks_data'],
  };

  const extractData1 = Object.values(campaignDataMapping[1]);
  const extractData2 = Object.values(campaignDataMapping[2]);
  const extractData3 = Object.values(campaignDataMapping[3]);
  const extractData4 = Object.values(campaignDataMapping[4]);
  const extractData5 = Object.values(campaignDataMapping[5]);

  const uiDataMapping = {
    all: {
      likes: ['좋아요 수', extractData1[0], 600 / 100],
      comments: ['댓글 수', extractData1[1], 46 / 10],
      hashtag: ['해시태그전환', extractData1[3], 60 / 10],
      reach: ['도달', extractData1[4], 2000 / 600],
      exposure: ['노출', extractData1[5], 2000 / 800],
      engage: [
        '참여도 / 참여율',
        extractData1[7] + '/' + extractData1[8] + '%',
        646 / 110,
      ],
    },
    first: {
      likes: ['좋아요 수', extractData2[0], ''],
      comments: ['댓글 수', extractData2[1]],
      hashtag: ['해시태그전환', extractData2[3]],
      reach: ['도달', extractData2[4]],
      exposure: ['노출', extractData2[5]],
      engage: [
        '참여도 / 참여율',
        extractData2[7] + '/' + extractData2[8] + '%',
      ],
    },
    second: {
      likes: ['좋아요 수', extractData3[0], 210 / 100],
      comments: ['댓글 수', extractData3[1], 20 / 10],
      hashtag: ['해시태그전환', extractData3[3], 30 / 10],
      reach: ['도달', extractData3[4], 800 / 600],
      exposure: ['노출', extractData3[5], 1300 / 800],
      engage: [
        '참여도 / 참여율',
        extractData3[7] + '/' + extractData3[8] + '%',
        230 / 110,
      ],
    },
    third: {
      likes: ['좋아요 수', extractData4[0], 150 / 210],
      comments: ['댓글 수', extractData4[1], 10 / 20],
      hashtag: ['해시태그전환', extractData4[3], 10 / 30],
      reach: ['도달', extractData4[4], 200 / 600],
      exposure: ['노출', extractData4[5], 700 / 1300],
      engage: [
        '참여도 / 참여율',
        extractData4[7] + '/' + extractData4[8] + '%',
        160 / 230,
      ],
    },
    fourth: {
      likes: ['좋아요 수', extractData5[0], 140 / 150],
      comments: ['댓글 수', extractData5[1], 6 / 10],
      hashtag: ['해시태그전환', extractData5[3], 10 / 10],
      reach: ['도달', extractData5[4], 100 / 500],
      exposure: ['노출', extractData5[5], 200 / 700],
      engage: [
        '참여도 / 참여율',
        extractData5[7] + '/' + extractData5[8] + '%',
        146 / 160,
      ],
    },
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
            {week === 'all' && (
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
            )}
            {week === '1st' && (
              <>
                <span>{followerData.value[2]}</span>
                <span>
                  {'지난주대비 ' +
                    convertNumberToFixed(followerData.comparison[2]) +
                    '배'}
                  <div>
                    <FontAwesomeIcon icon={faCaretUp} size="1x" />
                  </div>
                </span>
              </>
            )}
            {week === '2nd' && (
              <>
                <span>{followerData.value[3]}</span>
                <span>
                  {'지난주대비 ' +
                    convertNumberToFixed(followerData.comparison[3]) +
                    '배'}
                  <div>
                    <FontAwesomeIcon icon={faCaretUp} size="1x" />
                  </div>
                </span>
              </>
            )}
            {week === '3rd' && (
              <>
                <span>{followerData.value[4]}</span>
                <span>
                  {'지난주대비 ' +
                    convertNumberToFixed(followerData.comparison[4]) +
                    '배'}
                  <div>
                    <FontAwesomeIcon icon={faCaretUp} size="1x" />
                  </div>
                </span>
              </>
            )}
            {week === '4th' && (
              <>
                <span>{followerData.value[5]}</span>
                <span>
                  {'지난주대비 ' +
                    convertNumberToFixed(followerData.comparison[5]) +
                    '배'}
                  <div>
                    <FontAwesomeIcon icon={faCaretUp} size="1x" />
                  </div>
                </span>
              </>
            )}
          </StyledDataBox>
          {week === 'all' &&
            Object.values(uiDataMapping.all).map((data, idx) => {
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
          {week === '1st' &&
            Object.values(uiDataMapping.first).map((data, idx) => {
              return (
                <StyledDataBox color="grey2" size="medium" key={idx}>
                  <span>{data[0]}</span>
                  <span>
                    {data[1]}
                    <div>
                      <FontAwesomeIcon icon={faCaretUp} size="1x" />
                    </div>
                  </span>
                  <span>데이터가 없습니다.</span>
                </StyledDataBox>
              );
            })}
          {week === '2nd' &&
            Object.values(uiDataMapping.second).map((data, idx) => {
              return (
                <StyledDataBox color="grey2" size="medium" key={idx}>
                  <span>{data[0]}</span>
                  <span>{data[1]}</span>
                  <span>
                    {'지난주대비 ' + convertNumberToFixed(data[2]) + '배'}
                    <div>
                      <FontAwesomeIcon
                        icon={data[2] > 1 ? faCaretUp : faCaretDown}
                        size="1x"
                      />
                    </div>
                  </span>
                </StyledDataBox>
              );
            })}
          {week === '3rd' &&
            Object.values(uiDataMapping.third).map((data, idx) => {
              return (
                <StyledDataBox color="grey2" size="medium" key={idx}>
                  <span>{data[0]}</span>
                  <span>{data[1]}</span>
                  <span>
                    {'지난주대비 ' + convertNumberToFixed(data[2]) + '배'}
                    <div>
                      <FontAwesomeIcon
                        icon={data[2] > 1 ? faCaretUp : faCaretDown}
                        size="1x"
                      />
                    </div>
                  </span>
                </StyledDataBox>
              );
            })}
          {week === '4th' &&
            Object.values(uiDataMapping.fourth).map((data, idx) => {
              return (
                <StyledDataBox color="grey2" size="medium" key={idx}>
                  <span>{data[0]}</span>
                  <span>{data[1]}</span>
                  <span>
                    {'지난주대비 ' + convertNumberToFixed(data[2]) + '배'}
                    <div>
                      <FontAwesomeIcon
                        icon={data[2] > 1 ? faCaretUp : faCaretDown}
                        size="1x"
                      />
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

export default InfluencerProfile;
const ProfileWrapper = styled.div`
  margin: 0 3%;
  margin-top: 10px;
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
  width: 77%;
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
