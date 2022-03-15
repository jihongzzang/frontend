import { selector } from 'recoil';
import axios from 'axios';

export const influencerListSelector = selector({
  key: 'influencerListSelector',
  get: async ({ get }) => {
    const response = await axios.get(
      'http://172.1.6.129:8000/influencer/searchs?keyword='
    );
    return response.data;
  },
});

export const campaignListSelector = selector({
  key: 'campaignListSelector',
  get: async ({ get }) => {
    const response = await axios.get(
      'http://172.1.6.129:8000/influencer/search?keyword='
    );
    return response.data;
  },
});

export const influencerListSelector2 = selector({
  key: 'influencerListSelector2',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.influencer;
  },
});
