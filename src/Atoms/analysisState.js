import { atom, selector } from 'recoil';
import { influencerListSelector2 } from './fetchDataState';
import { statusInfluencersData } from './selectedState';

export const rightSelectedInfluencer = atom({
  key: 'rightSelectedInfluencer',
  default: '',
});

export const rightfilteredInfluencers = selector({
  key: 'rightfilteredInfluencers',
  get: ({ get }) => {
    const target = get(statusInfluencersData);
    return target;
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
