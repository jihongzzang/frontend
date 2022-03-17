export const convertWeeks = (week, arr) => {
  if (week === '1st') {
    return 2;
  }
  if (week === '2nd') {
    return 3;
  }
  if (week === '3rd') {
    return 4;
  }
  if (week === '4th') {
    return 5;
  }
  if (week === 'all') {
    return arr.length;
  }
};

export const convertWeeks2 = (week, arr) => {
  if (week === '1st') {
    return 2;
  }
  if (week === '2nd') {
    return 3;
  }
  if (week === '3rd') {
    return 4;
  }
  if (week === '4th') {
    return 5;
  }
  if (week === 'all') {
    return arr.length - 1;
  }
};
