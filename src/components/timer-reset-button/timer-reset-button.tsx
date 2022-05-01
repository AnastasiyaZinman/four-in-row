import { useContext } from "react";
import { UserContext } from "../../App";
import { Button } from "./timer-reset-button.styles";

const TimerResetButton = () => {
	const { isTimerActive, setIsTimerActive } = useContext(UserContext);

	return (<Button isActivated={isTimerActive}
		onClick={() => setIsTimerActive(!isTimerActive)}>
		{isTimerActive ? 'Reset' : 'Start'}
	</Button>)
}

export default TimerResetButton;