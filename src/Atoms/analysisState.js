import { atom, selector } from 'recoil';
import { influencerListSelector2 } from './fetchDataState';

export const leftSelectedCampaign = atom({
  key: 'leftSelectedCampaign',
  default: '',
});

export const leftSelectedInfluencer = atom({
  key: 'leftSelectedInfluencer',
  default: '',
});

export const rightSelectedCampaign = atom({
  key: 'rightSelectedCampaign',
  default: '',
});

export const rightSelectedInfluencer = atom({
  key: 'rightSelectedInfluencer',
  default: '',
});

export const leftfilteredInfluencers = selector({
  key: 'leftfilteredInfluencers',
  get: ({ get }) => {
    const allInfluencers = get(influencerListSelector2);
    const target = get(leftSelectedCampaign);
    const influencersData = allInfluencers.filter(ele => {
      return ele.participatedCampaigns?.find(el => el.name === target);
    });
    return influencersData;
  },
});

export const leftselectedInfluencer = selector({
  key: 'leftselectedInfluencer',
  get: ({ get }) => {
    const allInfluencers = get(influencerListSelector2);
    const target = get(leftSelectedInfluencer);
    const influencerData = allInfluencers.filter(({ name }) => name === target);
    return influencerData;
  },
});

export const rightfilteredInfluencers = selector({
  key: 'rightfilteredInfluencers',
  get: ({ get }) => {
    const allInfluencers = get(influencerListSelector2);
    const target = get(rightSelectedCampaign);
    const influencersData = allInfluencers.filter(ele => {
      return ele.participatedCampaigns?.find(el => el.name === target);
    });
    return influencersData;
  },
});

export const rightselectedInfluencer = selector({
  key: 'rightselectededInfluencer',
  get: ({ get }) => {
    const allInfluencers = get(influencerListSelector2);
    const target = get(rightSelectedInfluencer);
    const influencerData = allInfluencers.filter(({ name }) => name === target);
    return influencerData;
  },
});
