import React from 'react';
import { useRecoilValue } from 'recoil';
import { rightFilteredInfluencer } from '../../Atoms/analysisState';
import { selectedWeeks } from '../../Atoms/selectedState';
import { convertNumberToFixed } from '../../Hooks/convertData';
import {
  profileData,
  profileFollowerData,
} from '../../components/ProfileData/ProfileData';
import DataBox from '../../components/DataBox';
import styled from 'styled-components';

const RightProfile = () => {
  const influencerData = useRecoilValue(rightFilteredInfluencer);
  const week = useRecoilValue(selectedWeeks);
  const followerData = profileFollowerData(influencerData);
  const uiDataMapping = profileData(influencerData);
  delete uiDataMapping[week].likes;
  delete uiDataMapping[week].comments;
  return (
    <ProfileWrapper>
      <Content>
        <ContentText>
          <span>이름 : {influencerData[0].kor_name}</span>
          <span>성별 : {influencerData[0].gender[1]}</span>
          <span>나이 : {influencerData[0].age}</span>
        </ContentText>
        <DataWrraper>
          <StyledDataBox color="grey2" size="medium">
            <span>{followerData.name}</span>
            {week === 'all' && <span>{followerData.value[1]}</span>}
            {week === '1st' && <span>{followerData.value[2]}</span>}
            {week === '2nd' && <span>{followerData.value[3]}</span>}
            {week === '3rd' && <span>{followerData.value[4]}</span>}
            {week === '4th' && <span>{followerData.value[5]}</span>}
          </StyledDataBox>
          {week &&
            Object.values(uiDataMapping[week]).map((data, idx) => {
              return (
                <StyledDataBox color="grey2" size="medium" key={idx}>
                  <span>{data[0]}</span>
                  <span>{data[1]}</span>
                </StyledDataBox>
              );
            })}
        </DataWrraper>
      </Content>
    </ProfileWrapper>
  );
};

export default RightProfile;

const ProfileWrapper = styled.div`
  margin-left: 3%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 94%;
  height: 120px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  color: ${({ theme }) => theme.palette.black};
`;

const Content = styled.div`
  display: flex;
  margin-top: 3px;
  margin-left: 20px;
`;

const ContentText = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  line-height: 1.6em;
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
`;

const DataWrraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-right: 20px;
`;

const StyledDataBox = styled(DataBox)`
  width: 100px;
  height: 100px;
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
