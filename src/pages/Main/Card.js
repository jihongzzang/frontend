import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  influencerListSelector,
  campaignListSelector,
} from '../../Atoms/fetchDataState';

const Card = () => {
  const influencerData = useRecoilValue(influencerListSelector);
  const campaignData = useRecoilValue(campaignListSelector);

  console.log(influencerData);
  console.log(campaignData);
  return <div>Card</div>;
};

export default Card;
