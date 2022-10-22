import { Fragment, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import CalculatorWrapper from "./components/CalculatorWrapper";
import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons";
import Button from "./components/Button";

const calculatorBtns = [
  { value: "C", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "+-", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "%", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "/", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "*", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "-", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "+", bgColor: "bg-primary-300", textColor: "text-primary-100" },
  { value: "0" },
  { value: "." },
  { value: "<" },
  { value: "=", bgColor: "bg-primary-300", textColor: "text-primary-100" }
];

const operatorArr = ["+", "-", "*", "/"];

function App() {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  const handleBtnfn = (value) => {
    if (!firstValue && !isNaN(+value)) {
      setFirstValue(value);
      setResult(0);
    }
    if (firstValue && !operator && operatorArr.includes(value)) {
      setOperator(value);
    }
    if (operator && !secondValue && !isNaN(+value)) {
      setSecondValue(value);
    }

    if (value === "=") {
      let temResult = 0;
      switch (operator) {
        case "+":
          temResult = +firstValue + +secondValue;
          break;
        case "-":
          temResult = +firstValue - +secondValue;
          break;
        case "*":
          temResult = +firstValue * +secondValue;
          break;
        case "/":
          temResult = +firstValue / +secondValue;
          break;
      }
      setResult(temResult);
      setFirstValue(null);
      setSecondValue(null);
      setOperator(null);
    }
    if (value === "C") {
      setResult(0);
      setFirstValue(null);
      setSecondValue(null);
      setOperator(null);
    }
  };
  return (
    <Fragment>
      <Container>
        <CalculatorWrapper>
          {firstValue} {operator} {secondValue} = {result}
          <CalculatorScreen>{result}</CalculatorScreen>
          <CalculatorButtons>
            {calculatorBtns.map((btn, index) => {
              const bgColor = btn.bgColor ? btn.bgColor : undefined;
              const textColor = btn.textColor ? btn.textColor : undefined;
              return (
                <Button
                  key={index}
                  bgColor={bgColor}
                  textColor={textColor}
                  handleBtnfn={handleBtnfn}
                >
                  {btn.value}
                </Button>
              );
            })}
          </CalculatorButtons>
        </CalculatorWrapper>
      </Container>
    </Fragment>
  );
}

export default App;
