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
      className={`
        !min-h-[60px]
        sm:!min-h-[65px]
        !rounded-2xl
        !text-lg
        sm:!text-xl
        !font-semibold
        transition-all
        duration-200
        active:scale-95
        ${className}
      `}
    >
      {children}
    </Button>
  );
};

export default CalculatorButton;