import { Button } from "@mui/material";

const CalculatorButton = ({
  children,
  onClick,
  variant = "outlined",
  color = "inherit",
  className = "",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      
    >
      {children}
    </Button>
  );
};

export default CalculatorButton;