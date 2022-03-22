import { selector } from 'recoil';
import axios from 'axios';
import { CAMAPAIGN_BASE_URL } from '../config';

export const proceedingCampaignList = selector({
  key: 'proceedingCampaignList',
  get: async ({ get }) => {
    const response = await axios.get(
      `${CAMAPAIGN_BASE_URL}proceeding?status_filter=all`
    );
    return response.data;
  },
});

export const completionCampaignList = selector({
  key: 'completionCampaignList',
  get: async ({ get }) => {
    const response = await axios.get(
      `${CAMAPAIGN_BASE_URL}completion?status_filter=all`
    );
    return response.data;
  },
});

export const completionCampaignGraphList = selector({
  key: 'completionCampaignGraphList',
  get: async ({ get }) => {
    const response = await axios.get(`${CAMAPAIGN_BASE_URL}completion_graph`);
    return response.data;
  },
});
