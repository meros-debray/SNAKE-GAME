import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { makeMove, Request } from "../store/actions";

const useMoveSnake = () => {
  const dispatch = useDispatch();
  const moveSnake = useCallback(
    (dx = 0, dy = 0, disallowedDirection: string) => {
      if (dx > 0 && dy === 0 && disallowedDirection !== "RIGHT") {
        dispatch(makeMove(dx, dy, Request.MOVE_RIGHT));
      }

      if (dx < 0 && dy === 0 && disallowedDirection !== "LEFT") {
        dispatch(makeMove(dx, dy, Request.MOVE_LEFT));
      }

      if (dx === 0 && dy < 0 && disallowedDirection !== "UP") {
        dispatch(makeMove(dx, dy, Request.MOVE_UP));
      }

      if (dx === 0 && dy > 0 && disallowedDirection !== "DOWN") {
        dispatch(makeMove(dx, dy, Request.MOVE_DOWN));
      }
    },
    [dispatch]
  );
  return moveSnake;
};

export default useMoveSnake;
