type TPlayerId = 1 | 2;

export type TCellPlayerId = 0 | TPlayerId;

export interface IPlayer {
	id: TPlayerId,
	nickname: string,
	age: number
}

export interface ICell {
	x: number,
	y: number,
	playerId: TCellPlayerId
}

export interface ITimerParams {
	minutes: number;
	seconds: number;
}

export interface IWinnerDetails {
	player: IPlayer,
	moves: number,
	duration: ITimerParams,
	createdAt: Date
}