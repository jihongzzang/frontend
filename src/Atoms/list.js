import { atom, selector } from 'recoil';
import { MAIN_BASE_URL } from '../config';
import axios from 'axios';

export const listCategory = atom({
  key: 'listCategory',
  default: '',
});

export const listState = atom({
  key: 'listState',
  default: '',
});

export const listSortCriteria = atom({
  key: 'listSortCriteria',
  default: '',
});

export const influencerListSelector = selector({
  key: 'influencerListSelector',
  get: async ({ get }) => {
    const response = await axios.get(MAIN_BASE_URL + 'influnecer');
    return response.data;
  },
});

export const listSelector = selector({
  key: 'campaignListSelector',
  get: async ({ get }) => {
    const category = get(listCategory);
    const state = get(listState);
    const response = await axios.get(
      `http://172.1.6.129:8000/main/${category}/${state}`
    );
    return response.data;
  },
});
