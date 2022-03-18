import React, { useEffect } from 'react';
import DATA from './DATA';
import { convertDate, formatDate } from '../../../Hooks/convertData';

// function OngoingCampaignDailyFigures() {
// useEffect(() => {
//   fetch(
//     'http://172.1.6.129:8000/influencer/yoyo?status_filter=all&campaign_id=1'
//   )
//     .then(res => res.json())
//     .then(res => {
//       console.log('res');
//     });
// }, []);
//오늘
export const today = formatDate(new Date());
// 오늘보다 이전 날짜들
export const convertData = DATA[0].filter(
  ele => ele.created_at < '2022-03-17T00:00:00'
);

//compareFunction
export const sortData = function (a, b) {
  let dataA = new Date(a.created_at).getTime();
  let dataB = new Date(b.created_at).getTime();
  return dataA < dataB ? 1 : -1;
};
// 날짜 가장 최신 순으로 데이터 정렬
export const data = convertData.sort(sortData);
// 기간 내 날짜값들 배열로 추출하는 함수
export function getDatesStartToLast(startDate, lastDate) {
  let regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!(regex.test(startDate) && regex.test(lastDate)))
    return 'Not Date Format';
  let result = [];
  let curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
}
// 캠페인 시작날과 오늘날까지의 날짜값 배열로 추출
export const automaticDate = getDatesStartToLast('2022-03-01', today);
//공식 팔로워 값 : 날짜순으로 날짜별 수치의 총 합을 배열로 추출
export const officialFollower = automaticDate
  .map(x => ({
    [x]: data
      .filter(ele => convertDate(ele.created_at) === x)
      .map(f => f.official_follower)
      .reduce((p, c) => p + c, 0),
  }))
  .map(value => {
    return Object.keys(value).map(i => value[i]);
  })
  .reduce((a, b) => a.concat(b), []);

export const hashTag = automaticDate
  .map(x => ({
    [x]: data
      .filter(ele => ele.created_at.slice(0, 10) === x)
      .map(f => f.hashtag)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0),
  }))
  .map(value => {
    return Object.keys(value).map(i => value[i]);
  })
  .reduce((a, b) => a.concat(b), []);
