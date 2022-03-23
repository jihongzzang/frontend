import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  listCategory,
  listSelector,
  listSortCriteria,
  listState,
} from '../../Atoms/list';
import { selectedCampaignIdState } from '../../Atoms/campaignState';
import { formatDate } from '../../Hooks/convertData';
import Btn from '../../components/Btn';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  selectedInfluencer,
  selectedInfluencerState,
} from '../../Atoms/selectedState';

const CardList = ({ selected }) => {
  const data = useRecoilValue(listSelector);
  const selectedSort = useRecoilValue(listSortCriteria);
  const navigate = useNavigate();
  const selectedCategory = useRecoilValue(listCategory);
  const today = new Date();
  const convertToday = new Date(formatDate(today)).getTime();

  const state = useRecoilValue(listState);

  const sortBy = {
    recent: function (a, b) {
      let dateA = new Date(a.created_at).getTime();
      let dateB = new Date(b.created_at).getTime();
      return dateA < dateB ? -1 : 1;
    },
    exposure_high: (a, b) => b.average_exposure - a.average_exposure,
    exposure_low: (a, b) => a.average_exposure - b.average_exposure,
    engagementrate_high: function (a, b) {
      let dataA =
        (a.average_comment + a.average_like) /
        (a.average_female_follower + a.average_male_follower);
      let dataB =
        (b.average_comment + b.average_like) /
        (b.average_female_follower + b.average_male_follower);
      return dataB - dataA;
    },
    engagementrate_low: function (a, b) {
      let dataA =
        (a.average_comment + a.average_like) /
        (a.average_female_follower + a.average_male_follower);
      let dataB =
        (b.average_comment + b.average_like) /
        (b.average_female_follower + b.average_male_follower);
      return dataA - dataB;
    },
    follower: function (a, b) {
      let dataA = a.average_female_follower + a.average_male_follower;
      let dataB = b.average_female_follower + b.average_male_follower;
      return dataB - dataA;
    },
  };
  const updateCampaignPageData = useSetRecoilState(selectedCampaignIdState);
  const updateSelectedInfluencer = useSetRecoilState(selectedInfluencer);
  const updateSelectedState = useSetRecoilState(selectedInfluencerState);

  const changeCampaingPageData = e => {
    updateCampaignPageData(e.currentTarget.id);
    navigate(`/${selectedCategory}`);
  };

  const changeInfluencerPageData = e => {
    updateSelectedInfluencer(e.currentTarget.id);
    updateSelectedState('all');
    navigate(`/${selectedCategory}`);
  };

  const sortedData = [...data].sort(sortBy[selectedSort]);
  const renderData = selectedSort ? sortedData : data;

  return (
    <Wrrapper>
      {selected === 'campaign' &&
        renderData.map((campaign, idx) => {
          return (
            <Campaign
              key={campaign.Campaign.id}
              id={campaign.Campaign.id}
              onClick={changeCampaingPageData}
            >
              <ContentWrraper>
                <span>No.{idx + 1}</span>
                <img src={campaign.Campaign.image} alt="캠페인 이미지" />
                <span>{campaign.Campaign.name.slice(6)}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {new Date(campaign.Campaign.end_at).getTime() > convertToday
                    ? '진행중'
                    : '완료'}
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>{campaign.Campaign.created_at}</span>
                <span>&nbsp;-&nbsp;</span>
                <span>{campaign.Campaign.end_at}</span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(campaign.average_like).toLocaleString()}개
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(campaign.average_comment).toLocaleString()}개
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(campaign.average_exposure).toLocaleString()}회
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {(
                    Math.floor(
                      campaign.average_comment + campaign.average_like
                    ) - 1
                  ).toLocaleString() + '회'}
                </span>
                <span>&nbsp;/&nbsp;</span>
                <span>
                  {(
                    (Math.floor(
                      campaign.average_comment + campaign.average_like
                    ) /
                      Math.floor(
                        campaign.average_female_follower +
                          campaign.average_male_follower
                      )) *
                    100
                  ).toFixed(2) + '%'}
                </span>
              </ContentWrraper>
            </Campaign>
          );
        })}
      {selected === 'influencer' &&
        renderData.map((influencer, idx) => {
          return (
            <Campaign
              key={influencer.Influencer.id}
              name={influencer.Influencer.full_name}
              id={influencer.Influencer.full_name}
              onClick={changeInfluencerPageData}
            >
              <ContentWrraper>
                <span>No.{idx + 1}</span>
                <img
                  src={influencer.Influencer.profile_image}
                  alt="인플루언서 이미지"
                />
                <span>{influencer.Influencer.full_name}</span>
              </ContentWrraper>
              <ContentWrraper>
                {state === 'all' && <span>전체</span>}
                {state === 'proceeding' && <span>계약중</span>}
                {state === 'completion' && <span>계약완료</span>}
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(
                    influencer.average_female_follower +
                      influencer.average_male_follower
                  ).toLocaleString() + '명'}
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(influencer.average_like).toLocaleString()}개
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(influencer.average_comment).toLocaleString()}개
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {Math.floor(influencer.average_exposure).toLocaleString()}회
                </span>
              </ContentWrraper>
              <ContentWrraper>
                <span>
                  {(
                    Math.floor(
                      influencer.average_comment + influencer.average_like
                    ) - 1
                  ).toLocaleString() + '회'}
                </span>
                <span>&nbsp;/&nbsp;</span>
                <span>
                  {(
                    (Math.floor(
                      influencer.average_comment + influencer.average_like
                    ) /
                      Math.floor(
                        influencer.average_female_follower +
                          influencer.average_male_follower
                      )) *
                    100
                  ).toFixed(2) + '%'}
                </span>
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
  ::-webkit-scrollbar {
    display: none;
  }
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
