import { Players, TileColor } from '../../constants/game';
import { TCellPlayerId } from '../../models/game.model';
import { Cell } from './board-cell.styles';

interface BoardCellParams {
	playerId: TCellPlayerId,
	handleCellClick: Function
}

export const BoardCell = ({
	playerId,
	handleCellClick,
}: BoardCellParams) => {

	const handleClick = () => {
		if (playerId === Players.None) {
			handleCellClick();
			return;
		}
		alert("this column is already full")
	}

	return (
		<Cell
			backgroundColor={TileColor[playerId]}
			onClick={() => handleClick()}>
		</Cell>)
}
export default BoardCell;