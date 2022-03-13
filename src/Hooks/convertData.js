export const convertNumber = num => {
  if (num >= 10000) {
    return parseFloat((num / 10000).toFixed(1));
  }
  if (num >= 1000) {
    return num.toLocaleString();
  }
  if (num >= 0) {
    return num;
  }
  if (num === undefined) {
    return 0;
  }
  return 0;
};

export const convertDate = date => {
  return date.slice(0, 10);
};

export const convertPercent = num => {
  return parseFloat(num).toFixed(2) + '%';
};
