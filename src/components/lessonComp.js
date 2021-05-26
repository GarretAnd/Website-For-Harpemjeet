import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LessonComp extends Component {
  constructor(props) {
    super(props);

    this.state = { // Values Of The Note to tell what mode it is in, internal data
      focused: false,
    };
  }

  handleFocus = () => {
    this.setState((prevState) => ({ focused: !prevState.focused }));
  }

  render() {
    return (
      this.state.focused ? (
        <div role="button" tabIndex={0} onClick={this.handleFocus} className="lesson-text-box-expanded">
          <div className="lesson-title-expanded">
            {this.props.title}
          </div>
          <div className="lesson-text">
            {this.props.text}
          </div>
        </div>
      ) : (
        <div className="lesson-title-box" role="button" tabIndex={0} onClick={this.handleFocus}>
          {this.props.title}
        </div>
      )
    );
  }
}

export default withRouter((LessonComp));
