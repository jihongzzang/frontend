import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import {
  influencerListSelector,
  campaignListSelector,
} from '../../Atoms/fetchDataState';
import Btn from '../../components/Btn';

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
                <img src={campaign.img} alt="캠페인 이미지" />
                <span>{campaign.kor_name}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.status[1]}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {campaign.start_date} - {campaign.end_date}
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.likes}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.comments}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.exposure}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.engagement} </span>
                <span>&nbsp;/&nbsp;</span>
                <span>{campaign.engagement_rate}%</span>
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
                <img src={influencer.img} alt="캠페인 이미지" />
                <span>{influencer.kor_name}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.status[1]}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.followers}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.likes}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.comments}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.exposure}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{influencer.engagement} </span>
                <span>&nbsp;/&nbsp;</span>
                <span>{influencer.engagement_rate}%</span>
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
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
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
      width: 27.945%;
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
