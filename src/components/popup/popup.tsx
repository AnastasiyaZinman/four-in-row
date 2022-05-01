import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { Background, Button, PopupContainer, SubTitle, Title } from "./popup.styles";
export const Popup = ({ isWin }: any) => {
	const { currentPlayer, togglePlayerTurn, countOfMoves, setIsTimerActive, setIsWin, setIsDraw } = useContext(UserContext);

	const navigate = useNavigate();

	const goToResultsPage = () => {
		navigate('/results');
	}

	const renderWinDetails = () =>
		<>
			<Title>Our congratulations for {currentPlayer!.nickname}! You won in {countOfMoves} moves!</Title>
			<SubTitle>Click on button to see game details or start a new game</SubTitle>
			<Button onClick={goToResultsPage}>Go to the score board</Button>
		</>

	const renderPopupDetails = () => {
		if (isWin) {
			return renderWinDetails();
		}
		return <Title>All cells are filled! Restart game.</Title>
	}

	const resetGame = () => {
		setIsTimerActive(false);
		setIsWin(false);
		setIsDraw(false);
		togglePlayerTurn();
	}


	return <Background>
		<PopupContainer>
			{renderPopupDetails()}
			<Button onClick={() => resetGame()}>Start a new game</Button>
		</PopupContainer>
	</Background>
}

export default Popup;

