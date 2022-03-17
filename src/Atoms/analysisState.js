import { atom, selector } from 'recoil';
import { influencerListSelector2 } from './fetchDataState';

export const rightSelectedCampaign = atom({
  key: 'rightSelectedCampaign',
  default: '',
});

export const rightSelectedInfluencer = atom({
  key: 'rightSelectedInfluencer',
  default: '',
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
