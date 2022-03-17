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
      : allData.filter(({ status }) => status[0] === target);
  },
});

export const renderState = selector({
  key: 'renderState',
  get: ({ get }) => {
    const renderCondition = get(selectedInfluencer);
    const isRenderCondition = renderCondition.length > 0 ? true : false;
    return isRenderCondition;
  },
});

export const filteredInfluencer = selector({
  key: 'filteredInfluencer',
  get: ({ get }) => {
    const allInfluencer = get(influencerListSelector2);
    const target = get(selectedInfluencer);
    const influencerData = allInfluencer.filter(({ name }) => name === target);
    return influencerData;
  },
});
