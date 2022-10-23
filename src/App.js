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

const operatorArr = ["+", "-", "*", "/", "%"];

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState(null);
  const [, setResult] = useState(0);

  const handleBtnfn = (value) => {
    // if (!isNaN(+value) && !operator) {
    //   let tempValue = (firstValue == null ? "" : firstValue) + value;
    //   setFirstValue(+tempValue);
    //   setResult(0);
    // }

    // if (
    //   firstValue &&
    //   (firstValue + value).match(/\./g).length === 1 &&
    //   !operator
    // ) {
    //   let tempValue = firstValue + value;
    //   const nbrAfterPoint = tempValue.split(".");
    //   if (!isNaN(+nbrAfterPoint[1])) {
    //     console.log(+nbrAfterPoint[1]);
    //     setFirstValue(firstValue + value);
    //   }
    // }

    if (!isNaN(+(firstValue + value)) && !operator) {
      console.log(firstValue + value);
      setFirstValue(firstValue + value);
    }

    if (firstValue && value === "+-" && !operator) {
      setFirstValue(-firstValue);
    }

    if (firstValue && operatorArr.includes(value)) {
      setResult(0);
      setOperator(value);
    }
    if (operator && !isNaN(+(secondValue + value))) {
      setSecondValue(secondValue + value);
    }

    if (secondValue && value === "+-") {
      setSecondValue(-secondValue);
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
        case "%":
          temResult =
            +firstValue - Math.floor(+firstValue / +secondValue) * secondValue;
          //temResult = +firstValue % +secondValue;
          break;
        default:
          throw new Error("this operator doesnt exist.");
      }
      setResult(temResult);
      setFirstValue(temResult);
      setSecondValue("");
      setOperator(null);
    }
    if (value === "C") {
      setResult(0);
      setFirstValue("");
      setSecondValue("");
      setOperator(null);
    }
  };
  return (
    <Fragment>
      <Container>
        <CalculatorWrapper>
          <CalculatorScreen>
            {firstValue === ""
              ? 0
              : firstValue < 0
              ? secondValue === ""
                ? firstValue
                : `(${firstValue})`
              : firstValue}
            {operator} {secondValue < 0 ? `(${secondValue})` : secondValue}
          </CalculatorScreen>
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
