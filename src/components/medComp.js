import React, { Component } from 'react';
import { connect } from 'react-router-dom';

class MedComp extends Component {
  constructor(props) {
    super(props);

    this.state = { // Knows Title Of Note
      clicked: false,
    };
  }

  eventHandler = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  render() {
    return (
      <div className="med-comp-box">
        <div className="med-comp-title">
          {this.props.title}
        </div>
        <button type="button" onClick={this.eventHandler}>Play</button>
      </div>
    );
  }
}

export default connect((MedComp));
