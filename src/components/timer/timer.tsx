import React, { useState, useEffect } from 'react';
import { Time } from './timer.styles';

const Timer = ({setTimerValue, isTimerActive, isTimerPaused}: any) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  function resetTimer() {
    setSeconds(0);
		setMinutes(0);
  }

	function updateTimer() {
		let secondsUpdated = seconds + 1;
		if (secondsUpdated > 59) {
			setMinutes(minutes + 1);
			setSeconds(0);
			return;
		}
		setSeconds(secondsUpdated);
	}

  useEffect(() => {
    let interval: number = 0;
    if (isTimerPaused) {
			setTimerValue({minutes, seconds});
		} else if (isTimerActive && !isTimerPaused) {
      interval = window.setTimeout(() => {
        updateTimer();
      }, 1000);
    } else if(!isTimerActive && (seconds!==0 || minutes!==0)) {
			clearInterval(interval)
			resetTimer();
		} 
    return () => clearInterval(interval);
  }, [isTimerActive, isTimerPaused, seconds, minutes]);

	const getTimeValueString = (timeValue: number) => timeValue < 10 ? `0${ timeValue }` : timeValue;
  return (
		<Time>
			Timer: { getTimeValueString(minutes)}min : {getTimeValueString(seconds)}sec
		</Time>
  );
};

export default Timer;
