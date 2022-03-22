import axios from 'axios';
import { selector } from 'recoil';

export const influencerListSelector2 = selector({
  key: 'influencerListSelector2',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.influencer;
  },
});

export const campaignListSelector2 = selector({
  key: 'campaignListSelector2',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.campaign;
  },
});

export const testData = selector({
  key: 'testData',
  get: async ({ get }) => {
    const response = await axios.get('/data/test.json');
    return response;
  },
});
