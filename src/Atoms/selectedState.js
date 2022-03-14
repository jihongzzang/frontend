import { atom, selector } from 'recoil';
import { influencerListSelector2 } from './fetchDataState';

export const selectedInfluencerState = atom({
  key: 'selectedInfluencerState',
  default: '',
});

export const selectedInfluencer = atom({
  key: 'selectedInfluencer',
  default: '',
});

export const selectedWeeks = atom({
  key: 'selectedWeeks',
  default: 'all',
});

export const statusInfluencersData = selector({
  key: 'statusInfluencersData',
  get: ({ get }) => {
    const allData = get(influencerListSelector2);
    const target = get(selectedInfluencerState);
    return target === 'all'
      ? allData
      : allData.filter(status => status.status[0] === target);
  },
});

export const renderState = selector({
  key: 'renderState',
  get: ({ get }) => {
    const isRenderCondition = get(selectedInfluencer);
    return isRenderCondition.length > 0 ? true : false;
  },
});

export const filteredInfluencer = selector({
  key: 'filteredInfluencer',
  get: ({ get }) => {
    const allInfluencer = get(influencerListSelector2);
    const influencerName = get(selectedInfluencer);
    const influencerData = allInfluencer.filter(x => x.name === influencerName);
    return influencerData;
  },
});
