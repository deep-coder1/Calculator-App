import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  // -----------------------------
  // Number
  // -----------------------------
  const handleNumber = (number) => {
    if (waitingForNumber) {
      setDisplay(number);
      setWaitingForNumber(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  // -----------------------------
  // Decimal
  // -----------------------------
  const handleDecimal = () => {
    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  // -----------------------------
  // Calculation
  // -----------------------------
  const calculate = (first, second, operation) => {
    switch (operation) {
      case "+":
        return first + second;

      case "-":
        return first - second;

      case "×":
        return first * second;

      case "÷":
        return second === 0 ? "Error" : first / second;

      default:
        return second;
    }
  };

  // -----------------------------
  // Operator
  // -----------------------------
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (operator && waitingForNumber) {
      setOperator(nextOperator);
      return;
    }

    if (firstNumber === null) {
      setFirstNumber(inputValue);
    } else if (operator) {
      const result = calculate(
        firstNumber,
        inputValue,
        operator
      );

      setDisplay(String(result));
      setFirstNumber(result);
    }

    setOperator(nextOperator);
    setWaitingForNumber(true);
  };

  // -----------------------------
  // Equal
  // -----------------------------
  const handleEqual = () => {
    if (firstNumber === null || operator === null) {
      return;
    }

    const secondNumber = parseFloat(display);

    const result = calculate(
      firstNumber,
      secondNumber,
      operator
    );

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  // -----------------------------
  // Clear
  // -----------------------------
  const handleClear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(false);
  };

  // -----------------------------
  // Delete
  // -----------------------------
  const handleDelete = () => {
    if (display === "Error" || display.length === 1) {
      setDisplay("0");
      return;
    }

    setDisplay(display.slice(0, -1));
  };

  // -----------------------------
  // Percentage
  // -----------------------------
  const handlePercentage = () => {
    if (display === "Error") return;

    const value = parseFloat(display);

    setDisplay(String(value / 100));
  };

  return (
    <div className="w-full max-w-[420px]">
      <div
        className="
          rounded-[32px]
          bg-white
          p-4
          sm:p-6
          shadow-2xl
          border
          border-gray-100
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5 px-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Calculator
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Simple & Fast
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Calculator;