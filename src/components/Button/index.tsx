import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { StyledButton } from "./style";

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: PropsWithChildren<IButton>) => {
  return <StyledButton {...rest}> {children}</StyledButton>;
};

export default Button;
