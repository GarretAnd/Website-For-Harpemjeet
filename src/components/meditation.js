import React from 'react';
import { withRouter } from 'react-router-dom';
import MedComp from './medComp';

const Meditation = (props) => {
  return (
    <div>
      <div className="lessons-title">
        Guided Meditations
      </div>
      <div className="meditation-holder">
        <MedComp title="Vibrant Heart Meditation" path="VHM" />
      </div>
    </div>
  );
};

export default withRouter((Meditation));
