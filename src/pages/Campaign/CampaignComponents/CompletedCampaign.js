import React from 'react';
import GraphBoxes from './Graph/GraphBoxes';

function CompletedCampaign({ List, FiguresList, completedList }) {
  return (
    <div>
      <GraphBoxes
        List={List}
        FiguresList={FiguresList}
        completedList={completedList}
      />
    </div>
  );
}

export default CompletedCampaign;
