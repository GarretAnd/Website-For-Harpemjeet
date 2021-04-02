import React from 'react';
import { withRouter } from 'react-router-dom';

const LessonComp = (props) => {
  return (
    props.focused ? (
      <div>
        <div className="lesson-title-expanded">
          {props.title}
        </div>
        <div className="lesson-text">
          {props.text}
        </div>
      </div>
    ) : (
      <div className="lesson-title-box">
        {props.title}
      </div>
    )
  );
};

export default withRouter((LessonComp));
