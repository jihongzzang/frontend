import { selector } from 'recoil';
import { filteredInfluencer, statusInfluencersData } from './selectedState';

export const influencerTop3 = selector({
  key: 'influencerTop3',
  get: ({ get }) => {
    const influencer = get(filteredInfluencer);
    const influencers = get(statusInfluencersData);
    const targetCampaignId = influencer[0].campaign_id;
    const data = influencers.filter(x => x.campaign_id === targetCampaignId);
    return data;
  },
});
