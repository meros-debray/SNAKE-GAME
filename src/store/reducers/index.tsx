import { initial_snake } from "../../constants";
import {
  INCREMENT_SCORE,
  RESET_GAME,
  SET_DISALLOWED_DIRECTION,
  Success,
} from "../actions";

interface ISnakeCoordinates {
  x: number;
  y: number;
}

interface IAction {
  type: string;
  payload: any;
}
export interface IGlobalState {
  snake: ISnakeCoordinates[];
  disallowedDirection: string;
  score: number;
}

const initialState: IGlobalState = {
  snake: initial_snake,
  disallowedDirection: "",
  score: 0,
};

const gameReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Success.MOVE_RIGHT:
    case Success.MOVE_LEFT:
    case Success.MOVE_UP:
    case Success.MOVE_DOWN: {
      let newSnake = [...state.snake];
      newSnake = [
        {
          x: state.snake[0].x + action.payload[0],
          y: state.snake[0].y + action.payload[1],
        },
        ...newSnake,
      ];
      newSnake.pop();

      return {
        ...state,
        snake: newSnake,
      };
    }

    case SET_DISALLOWED_DIRECTION:
      return { ...state, disallowedDirection: action.payload };

    case INCREMENT_SCORE:
      const snakeLength = state.snake.length;
      const newSnake = [
        ...state.snake,
        {
          x: state.snake[snakeLength - 1].x,
          y: state.snake[snakeLength - 1].y,
        },
      ];
      const newScore = state.score + 1;
      return { ...state, snake: newSnake, score: newScore };

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default gameReducer;
