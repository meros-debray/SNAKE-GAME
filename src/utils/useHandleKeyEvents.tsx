import { useCallback } from "react";
import useMoveSnake from "./useMoveSnake";

const useHandleKeyEvents = (disallowedDirection: string) => {
  const moveSnake = useMoveSnake();
  const handleKeyEvents = useCallback(
    (event: KeyboardEvent) => {
      if (disallowedDirection) {
        switch (event.key) {
          case "ArrowUp":
            moveSnake(0, -20, disallowedDirection);
            break;
          case "ArrowDown":
            moveSnake(0, 20, disallowedDirection);
            break;
          case "ArrowLeft":
            moveSnake(-20, 0, disallowedDirection);
            break;
          case "ArrowRight":
            event.preventDefault();
            moveSnake(20, 0, disallowedDirection);
            break;
        }
      }
    },
    [disallowedDirection, moveSnake]
  );

  return handleKeyEvents;
};

export default useHandleKeyEvents;
