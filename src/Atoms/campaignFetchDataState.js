import { selector, atom } from 'recoil';
import axios from 'axios';
import { CAMAPAIGN_BASE_URL } from '../config';
import { selectedCampaignIdState } from './campaignState';
import { formatDate } from '../Hooks/convertData';

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

export const proceedingCampaignGraphList = selector({
  key: 'proceedingCampaignGraphList',
  get: async ({ get }) => {
    const targetId = get(selectedCampaignIdState);
    const response = await axios.get(
      `${CAMAPAIGN_BASE_URL}proceeding_graph?campaign_id=${Number(targetId)}`
    );
    return response.data[0];
  },
});

export const today = atom({
  key: 'today',
  default: formatDate(new Date()),
});

export const test = selector({
  key: 'test',
  get: async ({ get }) => {
    const comparison = get(today);
    const proceedingList = get(proceedingCampaignList).filter(
      a => a?.Campaign.end_at > comparison
    );
    const completedList = get(completionCampaignList).filter(
      a => a?.Campaign.end_at < comparison
    );
    return completedList.concat(proceedingList);
  },
});

export const renderCampaignData = selector({
  key: 'renderCampaignData',
  get: async ({ get }) => {
    const target = get(selectedCampaignIdState);
    const datas = get(test);
    const data = datas.find(x => x.Campaign.id === Number(target));
    return data;
  },
});

export const uiChangeCondition = selector({
  key: 'uiChangeCondition',
  get: async ({ get }) => {
    const selectedCampaign = get(renderCampaignData);
    const target = get(today);
    const changeUi = selectedCampaign?.Campaign?.end_at > target ? true : false;
    return changeUi;
  },
});
