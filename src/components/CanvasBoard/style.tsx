import styled from "styled-components";
import { canvas_size, colors } from "../../constants";

export const Root = styled.div`
  width: 100%;
  background-color: ${colors.background};
  padding-top: 4rem;
`;

export const CanvasContainer = styled.div`
  position: relative;
  margin: auto;
  width: ${canvas_size.width}px;
`;

export const Canvas = styled.canvas`
  background-color: ${colors.canvas_background};
`;

export const Overlay = styled.div`
  width: ${canvas_size.width}px;
  height: ${canvas_size.height}px;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const OverlayTitle = styled.h2`
  color: ${colors.background};
`;

export const Score = styled.h2`
  color: ${colors.background};
  margin: 0;
  position: absolute;
  text-align: center;
  top: 100%;
  left: 100%;
  translate: -200% -150%;
`;
