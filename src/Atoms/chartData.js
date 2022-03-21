import { selector } from 'recoil';
import { rightFilteredInfluencer } from './analysisState';
import { filteredInfluencer } from './selectedState';
import { selectedWeeks } from './selectedState';

export const chartData1 = selector({
  key: 'chartData1',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag: data[0].insight_1.hashtag_name[1],
      name: Object.keys(data[0].insight_1[target]),
      value: Object.values(data[0].insight_1[target]),
    };
  },
});

export const chartData2 = selector({
  key: 'chartData2',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag: data[0].insight_2.hashtag_name[1],
      name: Object.keys(data[0].insight_2[target]),
      value: Object.values(data[0].insight_2[target]),
    };
  },
});

export const chartData3 = selector({
  key: 'chartData3',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag: data[0].insight_3.hashtag_name[1],
      name: Object.keys(data[0].insight_3[target]),
      value: Object.values(data[0].insight_3[target]),
    };
  },
});

export const chartData4 = selector({
  key: 'chartData4',
  get: ({ get }) => {
    const data = get(filteredInfluencer);
    return data[0].followersRate;
  },
});

export const chartData5 = selector({
  key: 'chartData5',
  get: ({ get }) => {
    const data = get(filteredInfluencer);
    return data[0].followers;
  },
});

export const chartData6 = selector({
  key: 'chartData6',
  get: ({ get }) => {
    const data = get(filteredInfluencer);
    return data[0].insight_1;
  },
});

export const chartData9 = selector({
  key: 'chartData9',
  get: ({ get }) => {
    const data = get(rightFilteredInfluencer);
    return data[0].followersRate;
  },
});

export const chartData10 = selector({
  key: 'chartData10',
  get: ({ get }) => {
    const data = get(rightFilteredInfluencer);
    return data[0].followers;
  },
});

export const chartData11 = selector({
  key: 'chartData11',
  get: ({ get }) => {
    const data = get(rightFilteredInfluencer);
    return data[0].insight_1;
  },
});
