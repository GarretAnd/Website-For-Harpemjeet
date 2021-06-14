/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import Chime from '../img/VHM.mp3';

class MedCompV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      over: true,
      alarm: null,
    };
  }

  componentDidMount() {
    const alarmSound = new Howl({
      src: [Chime],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onend: () => {
        this.setState({ over: true });
        this.setState({ clicked: false });
      },
    });
    this.setState({ alarm: alarmSound });
    console.log(alarmSound);
  }

  componentWillUnmount() {
    this.state.alarm.stop();
  }

  eventHandler = () => {
    this.soundPlay();
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  soundPlay = () => {
    if (!this.state.clicked) {
      this.state.alarm.play();
      this.setState({ over: false });
    } else if (this.clicked && this.state.over) {
      this.state.alarm.stop();
    } else {
      this.state.alarm.pause();
    }
  }

  render() {
    Howler.volume(1.0);
    return (
      <div className="med-comp-box">
        <div className="med-comp-title">
          {this.props.title}
        </div>
        { !this.state.clicked ? (
          <div className="spacer">
            <i className="fas fa-play" aria-label="Play" role="button" onClick={this.eventHandler} tabIndex={0} />
          </div>
        )
          : (
            <div className="spacer">
              <i className="fas fa-pause" aria-label="Pause" role="button" onClick={this.eventHandler} tabIndex={0} />
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(MedCompV);
