const SEARCH_LISTS = [
  {
    categoryType: ['category', '카테고리'],
    optionLists: [
      { id: 1, name: 'campaign', korName: '캠페인' },
      { id: 2, name: 'influencer', korName: '인플루언서' },
    ],
  },
  {
    categoryType: ['state', '상태'],
    optionLists: [
      [
        { id: 1, name: 'all', korName: '전체' },
        { id: 2, name: 'proceeding', korName: '진행중' },
        { id: 3, name: 'completion', korName: '완료' },
      ],
      [
        { id: 1, name: 'all', korName: '전체' },
        { id: 2, name: 'proceeding', korName: '계약중' },
        { id: 3, name: 'completion', korName: '계약완료' },
      ],
    ],
  },
  {
    categoryType: ['list', '목록'],
    optionLists: [
      [
        { id: 1, name: '22fwWinter', korName: '22FW 디스커버리 겨울 패딩' },
        { id: 2, name: '22fwFall', korName: '22FW 디스커버리 가을 자켓' },
        {
          id: 3,
          name: '22ssSummer',
          korName: '22SS 디스커버리 여름 그래픽 반팔',
        },
        { id: 4, name: '22ssSpring', korName: '22SS 디스커버리 봄 자켓' },
      ],
      [
        { id: 1, name: 'jujihong', korName: '주지홍' },
        { id: 2, name: 'jungjimin', korName: '정지민' },
        { id: 3, name: 'choiheetaek', korName: '최희택' },
        { id: 4, name: 'kimsungsu', korName: '김성수' },
        { id: 5, name: 'parkhyelin', korName: '박혜린' },
      ],
    ],
  },
];

export default SEARCH_LISTS;
