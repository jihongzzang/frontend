import React from 'react';
import CampaignPrimaryFigures from './CampaignPrimaryFigures';
import GraphBoxes from './Graph/GraphBoxes';
import Feeds from './Feeds/Feeds';

function OngoingCampaign({ List }) {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  function dateFormat(t) {
    let mm = t.getMonth() + 1; // getMonth() is zero-based
    let dd = t.getDate();

    return [
      t.getFullYear(),
      '년 ',
      (mm > 9 ? '' : '0') + mm,
      '월 ',
      (dd > 9 ? '' : '0') + dd,
      '일',
    ].join('');
  }
  const yesterdayDateFormat = dateFormat(yesterday);

  return (
    <div>
      <CampaignPrimaryFigures
        List={List}
        FigureStandardText={yesterdayDateFormat}
      />
      <GraphBoxes List={List} />
      {/* <Feeds /> */}
    </div>
  );
}

export default OngoingCampaign;
