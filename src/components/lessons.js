import React from 'react';
import { withRouter } from 'react-router-dom';
import LessonComp from './lessonComp';

const Lessons = (props) => {
  return (
    <div>
      <div className="lessons-title">
        Vibrant Heart Lessons:
      </div>
      <div className="lessons-holder">
        <LessonComp title="Juice Fasting" text="insert text here" onClick={console.log('work on the onClick Logic')} />
      </div>
    </div>
  );
};

export default withRouter((Lessons));
