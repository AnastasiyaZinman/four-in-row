import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../App';
import { Cell, Table, Row, ResetGameButton, ResultsContainer, ResultsDetails, Title } from './results.styles';

const Results = () => {
const { togglePlayerTurn, winnersList } = useContext(UserContext);
const navigate = useNavigate();

const goToHomePage = () => {
	navigate('/game');
}

const resetGame = () => {
	togglePlayerTurn();
	goToHomePage();
}

const columns = [
	'#', 'Player nickname', 'Age', 'Count of moves', 'Duration of game', 'Time of game'];

const renderHeaderRow = () => <Row>
	{columns.map((columnName: string, i: number) => <Cell key={`${columnName + i}`}>{columnName}</Cell>)}
</Row>

const renderPlayersRows = () => <Row>
	{winnersList.map((playerDetails, number) => {
		const { player, moves, createdAt} =  playerDetails;
		const { nickname, age } = player;
		const { minutes, seconds } = playerDetails.duration;

		return (
			<Row key={`${playerDetails.player.nickname + number}`}>
				<Cell>{number}</Cell>
				<Cell>{nickname}</Cell>
				<Cell>{age}</Cell>
				<Cell>{moves}</Cell>
				<Cell>{minutes}min : {seconds}sec</Cell>
				<Cell>{createdAt.toString().slice(0,25)}</Cell>
			</Row>
		);
	})}
</Row>

return (
<ResultsContainer>
	<ResultsDetails>
		<Title>RESULTS</Title>
		<Table>
			{renderHeaderRow()}
			{renderPlayersRows()}
		</Table>
		<ResetGameButton onClick={() => resetGame()}>Reset</ResetGameButton>
	</ResultsDetails>
</ResultsContainer>)
}

export default Results;