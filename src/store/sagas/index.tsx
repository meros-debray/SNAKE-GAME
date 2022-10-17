import {
  CallEffect,
  delay,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { game_speed } from "../../constants";

import {
  DisallowedDirection,
  GAME_OVER,
  ISnakeCoordinates,
  Request,
  RESET_GAME,
  setDisallowedDirection,
} from "../actions";

export function* moveSaga(params: {
  type: string;
  payload: ISnakeCoordinates;
}): Generator<
  | PutEffect<{ type: string; payload: ISnakeCoordinates }>
  | PutEffect<{ type: string; payload: string }>
  | CallEffect<true>
> {
  while (params.type !== GAME_OVER && params.type !== RESET_GAME) {
    // Dispatches movement actions
    yield put({
      type: `${params.type.replace("REQUEST", "SUCCESS")}`,
      payload: params.payload,
    });

    // Dispatches SET_DISALLOWED_DIRECTION action
    switch (params.type) {
      case Request.MOVE_RIGHT:
        yield put(setDisallowedDirection(DisallowedDirection.LEFT));
        break;

      case Request.MOVE_LEFT:
        yield put(setDisallowedDirection(DisallowedDirection.RIGHT));
        break;

      case Request.MOVE_UP:
        yield put(setDisallowedDirection(DisallowedDirection.DOWN));
        break;

      case Request.MOVE_DOWN:
        yield put(setDisallowedDirection(DisallowedDirection.UP));
        break;
    }

    yield delay(game_speed);
  }
}

function* watcherSaga() {
  yield takeLatest(
    [
      Request.MOVE_RIGHT,
      Request.MOVE_LEFT,
      Request.MOVE_UP,
      Request.MOVE_DOWN,
      GAME_OVER,
      RESET_GAME,
    ],
    moveSaga
  );
}

export default watcherSaga;
