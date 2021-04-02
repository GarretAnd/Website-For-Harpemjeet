import React from 'react';
import { withRouter } from 'react-router-dom';

const FallBack = (props) => {
  return (
    <div>URL Not Found</div>
  );
};

export default withRouter((FallBack));
