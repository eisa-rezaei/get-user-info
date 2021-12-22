import { StButton } from "./style";

const Button = ({ children, bgColor, width, ...rest }) => {
  return (
    <StButton {...rest} bgColor={bgColor} width={width}>
      {children}
    </StButton>
  );
};

export default Button;
