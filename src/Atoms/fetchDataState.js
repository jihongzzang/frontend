import { atom, selector } from 'recoil';
import axios from 'axios';

export const campaignState = atom({
  key: 'campaignState',
  default: {},
});

export const campaignListState = {
  key: 'campaignListState',
  default: 0,
};

export const influencerListSelector = selector({
  key: 'influencerListSelector',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.influencer;
  },
});

export const campaignListSelector = selector({
  key: 'campaignListSelector',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.campaign;
  },
});
