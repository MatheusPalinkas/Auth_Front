import { ButtonProps } from "./ButtonProps";
import { ButtonStyled } from "./styles";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
