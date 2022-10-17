import { canvas_size } from "../constants";

export const clearBoard = (context: CanvasRenderingContext2D | null) => {
  context?.clearRect(0, 0, canvas_size.width, canvas_size.height);
};

export interface IObjectBody {
  x: number;
  y: number;
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillStyle: string
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      context.fillStyle = fillStyle;
      context.fillRect(object.x, object.y, 20, 20);
    });
  }
};

function generateRandomNumber(min: number, max: number) {
  const random = Math.random() * max;
  return random - (random % 20);
}
export const generateRandomApple = (width: number, height: number) => {
  return {
    x: generateRandomNumber(0, width),
    y: generateRandomNumber(0, height),
  };
};
