import { selector } from 'recoil';
import { filteredInfluencer } from './selectedState';
import { selectedWeeks } from './selectedState';

export const chartData1 = selector({
  key: 'chartData1',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag:
        data[0] !== undefined ? data[0]?.insight_1?.hashtag_name[1] : null,
      name:
        data[0] !== undefined ? Object.keys(data[0]?.insight_1[target]) : null,
      value:
        data[0] !== undefined
          ? Object.values(data[0]?.insight_1[target])
          : null,
    };
  },
});

export const chartData2 = selector({
  key: 'chartData2',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag:
        data[0] !== undefined ? data[0]?.insight_2?.hashtag_name[1] : null,
      name:
        data[0] !== undefined ? Object.keys(data[0]?.insight_2[target]) : null,
      value:
        data[0] !== undefined
          ? Object.values(data[0]?.insight_2[target])
          : null,
    };
  },
});

export const chartData3 = selector({
  key: 'chartData3',
  get: ({ get }) => {
    const target = get(selectedWeeks);
    const data = get(filteredInfluencer);
    return {
      hashtag:
        data[0] !== undefined ? data[0]?.insight_3?.hashtag_name[1] : null,
      name:
        data[0] !== undefined ? Object.keys(data[0]?.insight_3[target]) : null,
      value:
        data[0] !== undefined
          ? Object.values(data[0]?.insight_3[target])
          : null,
    };
  },
});

export const chartData4 = selector({
  key: 'chartData4',
  get: ({ get }) => {
    const data = get(filteredInfluencer);
    return data[0] !== undefined ? data[0]?.followersRate : null;
  },
});

export const chartData5 = selector({
  key: 'chartData5',
  get: ({ get }) => {
    const data = get(filteredInfluencer);
    return data[0] !== undefined ? data[0]?.followers : null;
  },
});
