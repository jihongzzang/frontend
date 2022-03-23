import axios from 'axios';
import { selector } from 'recoil';

export const influencerListSelector2 = selector({
  key: 'influencerListSelector2',
  get: async ({ get }) => {
    const response = await axios.get('/data/main.json');
    return response.data.influencer;
  },
});
