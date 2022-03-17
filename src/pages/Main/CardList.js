import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import {
  influencerListSelector,
  campaignListSelector,
} from '../../Atoms/fetchDataState';
import Btn from '../../components/Btn';
import {
  convertDate,
  convertNumber,
  convertPercent,
} from '../../Hooks/convertData';

const CardList = ({ selected }) => {
  const influencerData = useRecoilValue(influencerListSelector);
  const campaignData = useRecoilValue(campaignListSelector);

  return (
    <Wrrapper>
      {selected === 'campaign' &&
        campaignData.map((campaign, idx) => {
          return (
            <Campaign key={campaign.id}>
              <ContentWrraper>
                <span>No.{idx + 1}</span>
                <img src={campaign.image} alt="캠페인 이미지" />
                <span>{campaign.name}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.campaign_status}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertDate(campaign.created_at)}</span>
                <span>&nbsp;-&nbsp;</span>
                <span>{convertDate(campaign.end_at)}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(campaign.average_like)}개</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(campaign.average_comment)}개</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(campaign.average_exposure)}회</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.average_participation} </span>
                <span>&nbsp;/&nbsp;</span>
                <span>{convertPercent(campaign.average_rate)}</span>
              </ContentWrraper>
            </Campaign>
          );
        })}
      {selected === 'influencer' &&
        influencerData.map((influencer, idx) => {
          return (
            <Campaign key={influencer.id}>
              <ContentWrraper>
                <span>No.{idx + 1}</span>
                <img src={influencer.profile_image} alt="캠페인 이미지" />
                <span>{influencer.full_name}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.campaign_status}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(influencer.follower)}명</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(influencer.average_like)}개</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(influencer.average_comment)}개</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{convertNumber(influencer.average_exposure)}회</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.average_participation} </span>
                <span>&nbsp;/&nbsp;</span>
                <span>{influencer.average_rate}%</span>
              </ContentWrraper>
            </Campaign>
          );
        })}
    </Wrrapper>
  );
};

export default CardList;

const Wrrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 600px;
`;

const Campaign = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 102px;
  margin-top: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.palette.pageBackground};
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius2};
  padding: 0 20px;
  :nth-child(1) {
    margin-top: 0;
  }
`;

const ContentWrraper = styled(Btn)`
  width: 15%;
  margin-right: 1.635%;
  height: 100px;
  padding: 10px 0;
  font-size: 13px;
  font-weight: 400;
  justify-content: center;
  color: ${({ theme }) => theme.palette.black};
  background: ${({ theme }) => theme.palette.white};
  border: 0;

  :nth-child(1) {
    width: 20%;
    justify-content: flex-start;
    img {
      height: 80px;
      object-fit: cover;
      margin-left: 10px;
      border-radius: 10px;
    }
    span {
      margin-left: 10px;
      text-align: justify;
      font-size: 13px;
    }
    span:nth-child(1) {
      width: 10%;
      color: black;
      margin-left: 0;
      padding-right: 0;
    }
  }

  :nth-child(7) {
    margin-right: 0;
    span:nth-child(3) {
      color: ${({ theme }) => theme.palette.red};
    }
  }
`;
