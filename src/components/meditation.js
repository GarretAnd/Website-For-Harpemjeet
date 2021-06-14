import React from 'react';
import { withRouter } from 'react-router-dom';
import MedCompV from './medCompV';
import MedCompB from './medCompB';
import MedCompM from './medCompM';
import MedCompR from './medCompR';

const Meditation = (props) => {
  return (
    <div className="med-screen">
      <div className="lessons-title">
        Guided Meditations
      </div>
      <div className="meditation-holder">
        <MedCompV title="Vibrant Heart Meditation" path="VHM" />
        <MedCompB title="Breath Exercise for Focus" path="BEF" />
        <MedCompM title="Morning Intention Meditation" path="MIM" />
        <MedCompR title="Body Scan for Relaxation" path="BSR" />
      </div>
    </div>
  );
};

export default withRouter((Meditation));
