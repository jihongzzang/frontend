import React from 'react';
import styled from 'styled-components';
import GraphBox from './GraphBox';
import PRIMARY_FIGURES from './PRIMARY_FIGURES';

function GraphBoxes({ List }) {
  const campaignStatus = List.campaign_status === '진행 중';

  console.log(campaignStatus);
  return (
    <GraphBoxesWrap>
      {campaignStatus ? (
        <>
          <GraphBox width="32.2%" List={PRIMARY_FIGURES} />
          <GraphBox width="32.2%" List={PRIMARY_FIGURES} />
          <GraphBox width="32.2%" List={PRIMARY_FIGURES} />
        </>
      ) : (
        <>
          <GraphBox width="46.65vw" List={PRIMARY_FIGURES} />
          <GraphBox width="46.65vw" List={PRIMARY_FIGURES} />
        </>
      )}
    </GraphBoxesWrap>
  );
}

const GraphBoxesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GraphBoxes;
