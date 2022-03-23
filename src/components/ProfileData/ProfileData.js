export const profileFollowerData = arr => {
  const followerData = {
    name: '팔로워 수',
    value: {
      1: arr[0].followers[arr[0].followers.length - 1].value,
      2: arr[0].followers[1].value,
      3: arr[0].followers[2].value,
      4: arr[0].followers[3].value,
      5: arr[0].followers[4].value,
    },
    comparison: {
      1:
        arr[0].followers[arr[0].followers.length - 1].value /
        arr[0].followers[0].value,
      2: arr[0].followers[1].value / arr[0].followers[0].value,
      3: arr[0].followers[2].value / arr[0].followers[1].value,
      4: arr[0].followers[3].value / arr[0].followers[2].value,
      5: arr[0].followers[4].value / arr[0].followers[3].value,
    },
  };
  return followerData;
};

export const profileData = arr => {
  const campaignDataMapping = {
    1: arr[0].insight_1.all,
    2: arr[0].insight_1['1st'],
    3: arr[0].insight_1['2nd'],
    4: arr[0].insight_1['3rd'],
    5: arr[0].insight_1['4th'],
  };

  const extractData1 = Object.values(campaignDataMapping[1]);
  const extractData2 = Object.values(campaignDataMapping[2]);
  const extractData3 = Object.values(campaignDataMapping[3]);
  const extractData4 = Object.values(campaignDataMapping[4]);
  const extractData5 = Object.values(campaignDataMapping[5]);

  const uiDataMapping = {
    all: {
      likes: ['좋아요 수', extractData1[0], extractData1[0] / extractData2[0]],
      comments: ['댓글 수', extractData1[1], extractData1[1] / extractData2[1]],
      hashtag: [
        '해시태그전환',
        extractData1[3],
        extractData1[3] / extractData2[3],
      ],
      reach: ['도달', extractData1[4], extractData1[4] / extractData2[4]],
      exposure: ['노출', extractData1[5], extractData1[5] / extractData2[5]],
      engage: [
        '참여도(참여율)',
        extractData1[7] + '(' + extractData1[8] + '%)',
        extractData1[7] / extractData2[7],
      ],
    },
    '1st': {
      likes: ['좋아요 수', extractData2[0]],
      comments: ['댓글 수', extractData2[1]],
      hashtag: ['해시태그전환', extractData2[3]],
      reach: ['도달', extractData2[4]],
      exposure: ['노출', extractData2[5]],
      engage: ['참여도(참여율)', extractData2[7] + '/' + extractData2[8] + '%'],
    },
    '2nd': {
      likes: ['좋아요 수', extractData3[0], extractData3[0] / extractData2[0]],
      comments: ['댓글 수', extractData3[1], extractData3[1] / extractData2[1]],
      hashtag: [
        '해시태그전환',
        extractData3[3],
        extractData3[3] / extractData2[3],
      ],
      reach: ['도달', extractData3[4], extractData3[4] / extractData2[4]],
      exposure: ['노출', extractData3[5], extractData3[5] / extractData2[5]],
      engage: [
        '참여도(참여율)',
        extractData3[7] + '(' + extractData3[8] + '%)',
        extractData3[7] / extractData2[7],
      ],
    },
    '3rd': {
      likes: ['좋아요 수', extractData4[0], extractData4[0] / extractData3[0]],
      comments: ['댓글 수', extractData4[1], extractData4[1] / extractData3[1]],
      hashtag: [
        '해시태그전환',
        extractData4[3],
        extractData4[3] / extractData3[3],
      ],
      reach: ['도달', extractData4[4], extractData4[4] / extractData3[4]],
      exposure: ['노출', extractData4[5], extractData4[5] / extractData3[5]],
      engage: [
        '참여도(참여율)',
        extractData4[7] + '(' + extractData4[8] + '%)',
        extractData4[7] / extractData3[7],
      ],
    },
    '4th': {
      likes: ['좋아요 수', extractData5[0], extractData5[0] / extractData4[0]],
      comments: ['댓글 수', extractData5[1], extractData5[1] / extractData4[1]],
      hashtag: [
        '해시태그전환',
        extractData5[3],
        extractData5[3] / extractData4[3],
      ],
      reach: ['도달', extractData5[4], extractData5[4] / extractData4[4]],
      exposure: ['노출', extractData5[5], extractData5[5] / extractData4[5]],
      engage: [
        '참여도(참여율)',
        extractData5[7] + '(' + extractData5[8] + '%)',
        extractData5[7] / extractData4[7],
      ],
    },
  };
  return uiDataMapping;
};
