import { atom } from 'recoil';

export const selectedCampaignState = atom({
  key: 'campaignState',
  default: '항목을 선택해주세요.',
});
