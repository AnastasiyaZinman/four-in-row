import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import { TileColor, TITLE } from "../../constants/game";
import Board from "../board/board";
import TimerResetButton from "../timer-reset-button/timer-reset-button";
import Timer from "../timer/timer";
import { GameContainer, GameDetails, Header, Player, PlayerInfo, Title } from "./game.styles";

const Game = () => {
	const { currentPlayer, isWin, setIsWin, isTimerActive, setTimerValue, setIsTimerActive } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if(!currentPlayer) {
			navigate('/');
		}
		setIsTimerActive(true);
	
		return () => { setIsWin(false); }
	}, [isTimerActive])


	const renderHeader = () =>
	currentPlayer && <Header>
			<Title>{TITLE}</Title>
			<TimerResetButton />
			<GameDetails>
				<Timer isTimerActive={isTimerActive} setTimerValue={setTimerValue} isTimerPaused={isWin} />
				<PlayerInfo>
					Current turn:
					<Player playerColor={TileColor[currentPlayer!.id]}>{currentPlayer!.nickname}</Player>
				</PlayerInfo>
			</GameDetails>
		</Header>

	return <GameContainer>
		{renderHeader()}
		<Board />
	</GameContainer>
};

export default Game;