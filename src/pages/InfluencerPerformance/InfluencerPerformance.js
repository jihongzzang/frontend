import React from 'react';
import { useRecoilValue } from 'recoil';
import { influencerListSelector2 } from '../../Atoms/fetchDataState';
import { renderState } from '../../Atoms/selectedState';
import InfluencerSearchArea from './InfluencerSearchArea';
import InfluencerProfile from './InfluencerProfile';
import InfluencerChartArea from './InfluencerChartArea';
import InfluencerChartAreaFooter from './InfluencerChartAreaFooter';
import { SEARCH_STATE } from './SEARCH_STATE';
import { WEEK_LISTS } from './WEEK_LISTS';
import styled from 'styled-components';

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
      {renderCondition && (
        <>
          <InfluencerProfile />
          <InfluencerChartArea />
          <InfluencerChartAreaFooter />
        </>
      )}
    </Wrraper>
  );
};

export default InfluencerPerformance;

const Wrraper = styled.div`
  width: 1440px;
  height: 100vh;
  padding-top: 10px;
  background: ${({ theme }) => theme.palette.pageBackground};
`;
