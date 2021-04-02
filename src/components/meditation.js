import React from 'react';
import { withRouter } from 'react-router-dom';

const Meditation = (props) => {
  return (
    <div>
      <div className="meditation-title">
        Guided Meditation Recording
      </div>
      <div className="meditation-holder">
        Thingy
      </div>
    </div>
  );
};

export default withRouter((Meditation));
