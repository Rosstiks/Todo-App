import React from 'react';
import PropTypes from 'prop-types';

export default class Timer extends React.Component {
  static propTypes = {
    changeStatusTodo: PropTypes.func.isRequired,
    currentSession: PropTypes.number.isRequired,
  };

  formatingTime(value) {
    return `0${value}`.slice(-2);
  }

  render() {
    const { changeStatusTodo, currentSession } = this.props;
    const minutes = Math.trunc(currentSession / 60);
    const seconds = currentSession % 60;
    return (
      <span className="description">
        <button
          onClick={() => changeStatusTodo('startTimer')}
          className="icon icon-play"
          type="button"
          aria-label="Start timer"
        />
        <button
          onClick={() => changeStatusTodo('stopTimer')}
          className="icon icon-pause"
          type="button"
          aria-label="Stop timer"
        />
        <span style={{ marginLeft: 10 }}>
          {this.formatingTime(minutes)}:{this.formatingTime(seconds)}
        </span>
      </span>
    );
  }
}
