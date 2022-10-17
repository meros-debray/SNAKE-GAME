export enum Request {
  "MOVE_RIGHT" = "MOVE_RIGHT_REQUEST",
  "MOVE_LEFT" = "MOVE_LEFT_REQUEST",
  "MOVE_UP" = "MOVE_UP_REQUEST",
  "MOVE_DOWN" = "MOVE_DOWN_REQUEST",
}

export enum Success {
  "MOVE_RIGHT" = "MOVE_RIGHT_SUCCESS",
  "MOVE_LEFT" = "MOVE_LEFT_SUCCESS",
  "MOVE_UP" = "MOVE_UP_SUCCESS",
  "MOVE_DOWN" = "MOVE_DOWN_SUCCESS",
}

export enum DisallowedDirection {
  "RIGHT" = "RIGHT",
  "LEFT" = "LEFT",
  "UP" = "UP",
  "DOWN" = "DOWN",
}

export const SET_DISALLOWED_DIRECTION = "SET_DISALLOWED_DIRECTION";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const GAME_OVER = "GAME_OVER";
export const RESET_GAME = "RESET_GAME";

export interface ISnakeCoordinates {
  x: number;
  y: number;
}

export const makeMove = (dx: number, dy: number, move: string) => ({
  type: move,
  payload: [dx, dy],
});

export const setDisallowedDirection = (direction: string) => ({
  type: SET_DISALLOWED_DIRECTION,
  payload: direction,
});

export const incrementScore = () => ({
  type: INCREMENT_SCORE,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
