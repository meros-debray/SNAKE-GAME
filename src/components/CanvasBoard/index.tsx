import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameOver, incrementScore, resetGame } from "../../store/actions";
import { IGlobalState } from "../../store/reducers";
import {
  drawObject,
  clearBoard,
  generateRandomApple,
  IObjectBody,
} from "../../utils";
import useHandleKeyEvents from "../../utils/useHandleKeyEvents";
import useMoveSnake from "../../utils/useMoveSnake";
import {
  Canvas,
  CanvasContainer,
  Overlay,
  OverlayTitle,
  Root,
  Score,
} from "./style";
import { colors } from "../../constants";
import Button from "../Button";

export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  // Init variables
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snake = useSelector((state: IGlobalState) => state.snake);
  const score = useSelector((state: IGlobalState) => state.score);
  const disallowedDirection = useSelector(
    (state: IGlobalState) => state.disallowedDirection
  );
  const handleKeyEvents = useHandleKeyEvents(disallowedDirection);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [apple, setApple] = useState<IObjectBody>(
    generateRandomApple(width - 20, height - 20)
  );
  const [isEaten, setIsEaten] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Listen to keydown event
  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvents);
    return () => {
      window.removeEventListener("keydown", handleKeyEvents);
    };
  }, [disallowedDirection, handleKeyEvents]);

  // Draw the current canvas state on the screen
  const updateCanvas = (context: CanvasRenderingContext2D | null) => {
    if (context) {
      clearBoard(context); //Clears the canvas
      drawObject(context, [apple], colors.apple); //Draws the random apple
      drawObject(context, snake, colors.snake); //Draws the snake;
    }
  };

  // Handle start game
  const moveSnake = useMoveSnake();
  const handleStart = () => {
    moveSnake(20, 0, disallowedDirection);
    setIsGameStarted(true);
  };

  // Handle reset game
  const handleReset = () => {
    dispatch(resetGame());
    setApple(generateRandomApple(width - 20, height - 20));
    updateCanvas(context);
    setIsGameStarted(false);
  };

  // Check in snake has collided on himself
  const hasSnakeCollided = (snake: IObjectBody[]) => {
    let flag = false;
    snake.forEach((pos: IObjectBody, index: number) => {
      if (pos.x === snake[0].x && pos.y === snake[0].y && index !== 0) {
        flag = true;
      }
    });

    return flag;
  };

  useEffect(() => {
    // Get the canvas context
    setContext(canvasRef.current?.getContext("2d") || null);
    updateCanvas(context);

    // Check if snakes has eaten apple
    if (snake[0].x === apple?.x && snake[0].y === apple?.y) {
      setIsEaten(true);
    } else setIsEaten(false);

    // Check if snake has colided with the canvas borders or on himself
    if (
      hasSnakeCollided(snake) ||
      snake[0].x < 0 ||
      snake[0].y < 0 ||
      snake[0].x >= width ||
      snake[0].y >= height
    ) {
      setIsGameOver(true);
      dispatch(gameOver());
      window.removeEventListener("keydown", handleKeyEvents);
    } else setIsGameOver(false);
  }, [context, snake, handleKeyEvents]);

  // Generate a new apple if an apple is eaten
  useEffect(() => {
    if (isEaten) {
      setApple(generateRandomApple(width - 20, height - 20));
      dispatch(incrementScore());
    }
  }, [isEaten, width, height, dispatch]);

  return (
    <Root>
      <CanvasContainer>
        <Canvas ref={canvasRef} height={height} width={width} />
        {!isGameStarted && (
          <Overlay>
            <OverlayTitle>Snake game !</OverlayTitle>
            <Button onClick={handleStart}>Start</Button>
          </Overlay>
        )}
        {isGameOver && (
          <Overlay>
            <OverlayTitle>Game Over !</OverlayTitle>
            <Button onClick={handleReset}>Restart ?</Button>{" "}
          </Overlay>
        )}
        <Score>{score}</Score>
      </CanvasContainer>
    </Root>
  );
};

export default CanvasBoard;
