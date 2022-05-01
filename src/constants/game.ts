import { COLORS } from "./colors";

export const TITLE = 'Four in line';


export const BOARD_SIZE = {
	columns: 7,
	rows: 6
};

export const PLAYERS_COUNT = 2;

export const WIN_TILES_COUNT = 4;

export const Players = {
  None: 0,
  First: 1,
  Second: 2,
};

export const TileColor = {
  [Players.None]: COLORS.lightPurple,
  [Players.First]: COLORS.yellow,
  [Players.Second]: COLORS.pink,
};