import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { BOARD_SIZE, Players, WIN_TILES_COUNT } from "../../constants/game";
import { ICell, TCellPlayerId } from "../../models/game.model";
import BoardCell from "../board-cell/board-cell";
import { GameBoard, Column } from "./board.styles";

const Board = () => {
	const { currentPlayer, setIsWin, setIsDraw, togglePlayerTurn, isTimerActive, setCountOfMoves, updateWinnersList } = useContext(UserContext);

	const [board, updateBoard] = useState<any[] | null>(null);

	useEffect(() => {
		const initializeBoard = () => {
			const board = [];
			for (let x = 0; x < BOARD_SIZE.columns; x++) {
				const row = [];
				for (let y = 0; y < BOARD_SIZE.rows; y++) {
					row.push({ playerId: Players.None, x, y });
				}
				board.push(row);
			}
			return board
		};

		if (!board || !isTimerActive) {
			const initialBoard = initializeBoard();
			updateBoard(initialBoard);
		}
	}, [currentPlayer, isTimerActive]);

	const getEmptyColumnCell = (x: number) => board![x].find((cell: ICell) => cell.playerId === Players.None)

	const pushPlayerTile = (x: number) => {
		const topEmptyColumnCell = getEmptyColumnCell(x);
		board![topEmptyColumnCell.x][topEmptyColumnCell.y].playerId = currentPlayer?.id;
		updateBoard(board);
	};

	const handleCellClick = (x: number) => {
		pushPlayerTile(x);
		checkGameStatus(x);
	};

	const countWinnerMoves = () => board?.reduce((count, currentColumn) => {
		return count + currentColumn.filter((cell: any) => cell.playerId === currentPlayer?.id).length
	}, 0);

	const isDraw = () => board?.map((column: any[]) => column.every((cell: ICell) => cell.playerId !== Players.None)).every((val) => val === true)

	const getYPositionOfTopTile = (x: number) => getEmptyColumnCell(x)?.y - 1 || BOARD_SIZE.rows - 1;

	const checkGameStatus = (x: number) => {
		const y = getYPositionOfTopTile(x);

		if (isWinConnection(x, y)) {
			const countOfMoves = countWinnerMoves();
			setCountOfMoves(countOfMoves);
			setIsWin(true);
		}
		else if (isDraw()) {
			setIsDraw(true);
		}
		else {
			togglePlayerTurn();
		}
	};

	const isWinConnection = (x: number, y: number) =>
		isConnectionInRowAndColumn(x, y) ||
		isConnectionInLeftDiagonal(x, y) ||
		isConnectionInRightDiagonal(x, y);

	const updateCounter = (cellPlayerId: TCellPlayerId, count: number) => (cellPlayerId === currentPlayer?.id) ? count += 1 : 0;

	const isConnectionInRowAndColumn = (x: number, y: number): boolean => {
		let countByRow = 0, countByColumn = 0;
		for (let i = 0; i < BOARD_SIZE.columns - 1; i++) {
			if ((countByRow === WIN_TILES_COUNT) || (countByColumn === WIN_TILES_COUNT)) {
				break;
			}
			countByRow = updateCounter(board![i][y].playerId, countByRow);
			countByColumn = updateCounter(board![x][i].playerId, countByColumn);
		};
		return (countByRow === WIN_TILES_COUNT || countByColumn === WIN_TILES_COUNT) ? true : false;
	};

	const isConnectionInLeftDiagonal = (x: number, y: number): boolean => {
		let connectionCounter = 0,
			sumOfIndex = x + y,         // sum of indexes of cell in left diagonal always same
			j = (sumOfIndex < BOARD_SIZE.rows - 1) ? sumOfIndex : BOARD_SIZE.rows - 1,
			i = (sumOfIndex < BOARD_SIZE.rows - 1) ? 0 : sumOfIndex - j;
		while ((j >= 0 && i < BOARD_SIZE.columns) && connectionCounter < WIN_TILES_COUNT) {
			connectionCounter = updateCounter(board![i][j].playerId, connectionCounter);
			i++; j--;
		}
		return (connectionCounter === WIN_TILES_COUNT ? true : false);
	}

	const isConnectionInRightDiagonal = (x: number, y: number): boolean => {
		let connectionCounter = 0,
			difOfIndex = x - y,           // difference between indexes of cell in right diagonal always same
			i = (difOfIndex < 0) ? 0 : difOfIndex,
			j = (difOfIndex < 0) ? - difOfIndex : 0;
		while ((j < BOARD_SIZE.rows && i < BOARD_SIZE.columns) && connectionCounter < WIN_TILES_COUNT) {
			connectionCounter = updateCounter(board![i][j].playerId, connectionCounter);
			i++; j++;
		}
		return (connectionCounter === WIN_TILES_COUNT ? true : false)
	}

	const RenderColumn = ({ column, i }: {column: ICell[], i: number}) => {
		return <Column>{
			column.map((cell: ICell, j: number) =>
				<BoardCell
					handleCellClick={() => handleCellClick(cell.x)}
					playerId={cell.playerId}
					key={`${i} ${j}`}
				/>)}
		</Column>
	}

	return <GameBoard isTimerActive={isTimerActive}>
		{
			board?.map((column: ICell[], i: number) =>
				<RenderColumn column={column} i={i} key={`column ${i}`} />)}
	</GameBoard>
};

export default Board;
