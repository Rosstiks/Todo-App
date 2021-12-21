import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Timer({ timeout }) {
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerId, setTimerId] = useState(null);
  useEffect(() => setTimeLeft(timeout), [timeout]);
  useEffect(() => {
    if (!timeLeft) {
      clearInterval(timerId);
      setActive(false);
    }
  }, [timeLeft, timerId]);
  useEffect(() => () => clearTimeout(timerId), [timerId]);

  const stopTimer = () => {
    if (active) {
      clearInterval(timerId);
      setActive(false);
    }
  };

  const startTimer = () => {
    if (!active) {
      setTimerId(setInterval(() => setTimeLeft((time) => time - 1), 1000));
      setActive(true);
    }
  };

  function formatingTime(value) {
    return `0${value}`.slice(-2);
  }

  const minutes = Math.trunc(timeLeft / 60);
  const seconds = timeLeft % 60;
  const fontColor = timeLeft ? 'gray' : 'red';

  return (
    <span className="description">
      <button onClick={startTimer} className="icon icon-play" type="button" aria-label="Start timer" />
      <button onClick={stopTimer} className="icon icon-pause" type="button" aria-label="Stop timer" />
      <span style={{ marginLeft: 10, color: fontColor }}>
        {formatingTime(minutes)}:{formatingTime(seconds)}
      </span>
    </span>
  );
}

Timer.propTypes = {
  timeout: PropTypes.number.isRequired,
};
