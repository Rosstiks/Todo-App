import React from 'react';
import PropTypes from 'prop-types';

export default class Timer extends React.Component {
  static propTypes = {
    timeout: PropTypes.number.isRequired,
  };

  state = {
    active: false,
    timeLeft: null,
  };

  componentDidMount() {
    const { timeout } = this.props;
    this.setState({ timeLeft: timeout });
  }

  tick = () => {
    const { timeLeft } = this.state;
    if (!timeLeft) {
      this.stopTimer();
      return;
    }
    this.setState(({ timeLeft }) => ({ timeLeft: timeLeft - 1 }));
  };

  startTimer = () => {
    const { active } = this.state;
    if (!active) {
      this.timerID = setInterval(this.tick, 1000);
      this.setState({
        active: true,
      });
    }
  };

  stopTimer = () => {
    const { active } = this.state;
    if (active) {
      clearInterval(this.timerID);
      this.setState({ active: false });
    }
  };

  formatingTime(value) {
    return `0${value}`.slice(-2);
  }

  render() {
    const { timeLeft } = this.state;
    const minutes = Math.trunc(timeLeft / 60);
    const seconds = timeLeft % 60;
    const fontColor = timeLeft ? 'gray' : 'red';

    return (
      <span className="description">
        <button onClick={this.startTimer} className="icon icon-play" type="button" aria-label="Start timer" />
        <button onClick={this.stopTimer} className="icon icon-pause" type="button" aria-label="Stop timer" />
        <span style={{ marginLeft: 10, color: fontColor }}>
          {this.formatingTime(minutes)}:{this.formatingTime(seconds)}
        </span>
      </span>
    );
  }
}
