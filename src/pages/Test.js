import React from 'react';
import { useRecoilValue } from 'recoil';
import { testData } from '../Atoms/fetchDataState';

const TEST = () => {
  const test = useRecoilValue(testData);
  const insight = test.data[0];

  const formatDate = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };

  const today = formatDate(new Date());

  const convertData = [...insight].filter(
    ele => ele.created_at < '2022-03-17T00:00:00'
  );

  const sortData = function (a, b) {
    let dataA = new Date(a.created_at).getTime();
    let dataB = new Date(b.created_at).getTime();
    return dataA < dataB ? 1 : -1;
  };

  const data = convertData.sort(sortData);

  function getDatesStartToLast(startDate, lastDate) {
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

  const automaticDate = getDatesStartToLast('2022-03-01', today);

  const C = automaticDate.map(x => ({
    [x]: data
      .filter(ele => ele.created_at.slice(0, 10) === x)
      .map(f => f.exposure)
      .reduce((previousValue, currentValue) => previousValue + currentValue),
  }));

  const D = automaticDate.map(x => ({
    [x]: data
      .filter(ele => ele.created_at.slice(0, 10) === x)
      .map(f => f.hashtag)
      .reduce((previousValue, currentValue) => previousValue + currentValue),
  }));

  return <div>TEST</div>;
};

export default TEST;
