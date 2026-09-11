import { Paper } from "@mui/material";

const CalculatorDisplay = ({ display, firstNumber, operator }) => {
  return (
    <Paper
      elevation={0}
      className="
        !bg-[#111827]
        !rounded-3xl
        p-5
        sm:p-6
        mb-5
        overflow-hidden
      "
    >
      {/* Previous calculation */}
      <div className="h-6 text-right text-sm sm:text-base text-gray-400">
        {firstNumber !== null && operator
          ? `${firstNumber} ${operator}`
          : ""}
      </div>

      {/* Current value */}
      <div
        
      >
        {display}
      </div>
    </Paper>
  );
};

export default CalculatorDisplay;