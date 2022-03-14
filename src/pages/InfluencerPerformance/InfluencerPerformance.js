import React from 'react';
import { useRecoilValue } from 'recoil';
import { influencerListSelector2 } from '../../Atoms/fetchDataState';
import InfluencerSearchArea from './InfluencerSearchArea';
import InfluencerProfile from './InfluencerProfile';
import { SEARCH_STATE } from './SEARCH_STATE';
import { WEEK_LISTS } from './WEEK_LISTS';
import styled from 'styled-components';
import { renderState } from '../../Atoms/selectedState';

const InfluencerPerformance = () => {
  const influencerData = useRecoilValue(influencerListSelector2);
  const renderCondition = useRecoilValue(renderState);
  const influencerType = SEARCH_STATE.influncerType;
  const weekType = WEEK_LISTS.weekType;

  return (
    <Wrraper>
      <InfluencerSearchArea
        influencerType={influencerType}
        influencerData={influencerData}
        weekType={weekType}
      />
      {renderCondition && <InfluencerProfile />}
    </Wrraper>
  );
};

export default InfluencerPerformance;

const Wrraper = styled.div`
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10px;
  height: 954px;
  background: ${({ theme }) => theme.palette.pageBackground};
`;
