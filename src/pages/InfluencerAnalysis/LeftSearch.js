import React from 'react';
import { useRecoilValue } from 'recoil';
import InfluencerSearchArea from '../../components/InfluencerSearchArea';
import { influencerListSelector2 } from '../../Atoms/fetchDataState';
import { WEEK_LISTS } from '../../constantData/WEEK_LISTS';
import { SEARCH_STATE } from '../../constantData/SEARCH_STATE';
import styled from 'styled-components';

const LeftSearch = () => {
  const influencerData = useRecoilValue(influencerListSelector2);
  const influencerType = SEARCH_STATE.influncerType;
  const weekType = WEEK_LISTS.weekType;
  return (
    <InfluencerSearchArea
      influencerType={influencerType}
      influencerData={influencerData}
      weekType={weekType}
    />
  );
};

export default LeftSearch;
