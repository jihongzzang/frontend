import { atom, selector } from 'recoil';
import { influencerListSelector2 } from './fetchDataState';
import { selectedInfluencer, statusInfluencersData } from './selectedState';

export const rightSelectedInfluencer = atom({
  key: 'rightSelectedInfluencer',
  default: '',
});

export const rightfilteredInfluencers = selector({
  key: 'rightfilteredInfluencers',
  get: ({ get }) => {
    const target = get(statusInfluencersData);
    const target2 = get(selectedInfluencer);
    const influencerData = target.filter(ele => ele.name !== target2);
    return influencerData;
  },
});

export const rightFilteredInfluencer = selector({
  key: 'rightFilterdInfluencer',
  get: ({ get }) => {
    const allInfluencers = get(influencerListSelector2);
    const target = get(rightSelectedInfluencer);
    const influencerData = allInfluencers.filter(({ name }) => name === target);
    return influencerData;
  },
});
