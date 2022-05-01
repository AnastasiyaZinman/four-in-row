import { PLAYERS_COUNT } from "../constants/game";

export const getRandomNumber = (max = PLAYERS_COUNT) => Math.floor((Math.random() * max) + 1);