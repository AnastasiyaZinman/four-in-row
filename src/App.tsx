import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './components/results/results';
import { AppContainer } from './App.styles';
import Game from './components/game/game';
import Popup from './components/popup/popup';
import RegistrationPage from './components/registration-page/registration-page';
import { getRandomNumber } from './utils/board.util';
import { IPlayer, ITimerParams, IWinnerDetails } from './models/game.model';
import { Players } from './constants/game';

export const UserContext = createContext<{
	currentPlayer: IPlayer | null,
	timerValues: ITimerParams,
	countOfMoves: number,
	isTimerActive: boolean,
	setIsTimerActive: Function,
	setTimerValue: Function,
	togglePlayerTurn: Function,
	setCountOfMoves: Function,
	setIsWin: Function,
	setIsDraw: Function,
	isWin: boolean,
	winnersList: IWinnerDetails[],
	updateWinnersList: Function
}>
	({
		currentPlayer: null,
		timerValues: { minutes: 0, seconds: 0 },
		countOfMoves: 0,
		isTimerActive: false,
		setIsTimerActive: () => {},
		setTimerValue: () => {},
		togglePlayerTurn: () => {},
		setCountOfMoves: () => {},
		setIsWin: () => {},
		setIsDraw: () => {},
		isWin: false,
		winnersList: [],
		updateWinnersList: () => {}
	});

function App() {
	const [players, updatePlayers] = useState<any>([]);
	const [currentPlayer, setCurrentPlayer] = useState<IPlayer | null>(null);
	const [isTimerActive, setIsTimerActive] = useState(false);
	const [countOfMoves, setCountOfMoves] = useState(0);

	const [timerValues, setTimerValue] = useState<ITimerParams>({ minutes: 0, seconds: 0 });
	const [isWin, setIsWin] = useState(false);
	const [winnersList, updateWinnersList] = useState<IWinnerDetails[]>([])
	const [isDraw, setIsDraw] = useState(false);

	useEffect(() => {
		if (players.length === 2 && !isWin) {
			const randomPlayerId: any = getRandomNumber();
			setCurrentPlayer(players.find((player: any) => player.id === randomPlayerId));
		}

		if(isWin) {
			const data = {
				...{player: currentPlayer!},
				...{ moves: countOfMoves },
				...{ duration: timerValues},
				...{createdAt: new Date()}};
			updateWinnersList([...winnersList, data])
		}

	}, [players, timerValues]);

	const togglePlayerTurn = () => {
		const toggledPlayerId = currentPlayer!.id === Players.First ? Players.Second : Players.First;
		setCurrentPlayer(players.find((player: IPlayer) => player.id === toggledPlayerId));
	}

	const renderApp = () =>
		<AppContainer>
			<UserContext.Provider value={{
				currentPlayer,
				timerValues,
				countOfMoves,
				isTimerActive,
				setIsTimerActive,
				setTimerValue,
				togglePlayerTurn,
				setCountOfMoves,
				setIsWin,
				setIsDraw,
				isWin,
				winnersList,
				updateWinnersList
				}}>
				{(isWin || isDraw) && <Popup isWin={isWin} />}
				<Routes>
					<Route path="/" element={
						<RegistrationPage handleData={updatePlayers} />}
					/>
					<Route path="/game" element={
						<Game	/>}
					/>
					<Route path="results" element={<Results />} />
				</Routes>
			</UserContext.Provider>
		</AppContainer>

	return (
		<BrowserRouter>
			{renderApp()}
		</BrowserRouter>
	);
}

export default App;

