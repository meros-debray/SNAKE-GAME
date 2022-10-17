import styled from "styled-components";
import { colors } from "../../constants";

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 3px solid ${colors.background};
  color: ${colors.background};
  background-color: ${colors.canvas_background};
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;
