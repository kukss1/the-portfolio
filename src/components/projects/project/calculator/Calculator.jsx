import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


const CalculatorWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
});

const NumButton = styled(Button)({
  minWidth: "50px",
  minHeight: "50px",
  margin: "5px",
  color:"#fff",
  backgroundColor:"GrayText"
});

const OperatorButton = styled(Button)({
  minWidth: "50px",
  minHeight: "50px",
  margin: "5px",
  backgroundColor: "#f44336",
  color: "#fff",
});

const ClearButton = styled(Button)({
  minWidth: "100px",
  minHeight: "50px",
  margin: "5px",
  backgroundColor: "#f44336",
  color: "#fff",
});

function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const parseExpression = (expression) => {
    const tokens = expression.match(/\d+\.?\d*|\+|\-|\*|\/|\(|\)/g);

    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    const outputQueue = [];
    const operatorStack = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (/\d+\.?\d*/.test(token)) {
        outputQueue.push(parseFloat(token));
      } else if (/\+|\-|\*|\//.test(token)) {
        while (
          operatorStack.length > 0 &&
          precedence[token] <=
            precedence[operatorStack[operatorStack.length - 1]]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (operatorStack[operatorStack.length - 1] !== "(") {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop();
      }
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    const stack = [];

    for (let i = 0; i < outputQueue.length; i++) {
      const token = outputQueue[i];

      if (typeof token === "number") {
        stack.push(token);
      } else if (/\+|\-|\*|\//.test(token)) {
        const right = stack.pop();
        const left = stack.pop();

        if (token === "+") {
          stack.push(left + right);
        } else if (token === "-") {
          stack.push(left - right);
        } else if (token === "*") {
          stack.push(left * right);
        } else if (token === "/") {
          stack.push(left / right);
        }
      }
    }

    return stack[0];
  };

  const handleEvaluate = () => {
    try {
      const result = parseExpression(expression);
      setExpression(String(result));
    } catch (error) {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleKeyDown = (event) => {
    // Check which key was pressed
    switch (event.key) {
      case "Enter":
        handleEvaluate();
        break;
      case "Escape":
        handleClear();
        break;
      case "Backspace":
        handleClear();
        break;
      default:
        const key = event.key;
        if (/\d|\+|\-|\*|\//.test(key)) {
          handleClick(key);
        }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {

      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Calculator</h1>
      <CalculatorWrapper container>
        <Grid item>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={expression}
            inputProps={{ style: { textAlign: "center" } }}
            InputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
        <Grid item>
          <NumButton onClick={() => handleClick("1")}>1</NumButton>
          <NumButton onClick={() => handleClick("2")}>2</NumButton>
          <NumButton onClick={() => handleClick("3")}>3</NumButton>
          <OperatorButton onClick={() => handleClick("+")}>+</OperatorButton>
        </Grid>
        <Grid item>
          <NumButton onClick={() => handleClick("4")}>4</NumButton>
          <NumButton onClick={() => handleClick("5")}>5</NumButton>
          <NumButton onClick={() => handleClick("6")}>6</NumButton>
          <OperatorButton onClick={() => handleClick("-")}>-</OperatorButton>
        </Grid>
        <Grid item>
          <NumButton onClick={() => handleClick("7")}>7</NumButton>
          <NumButton onClick={() => handleClick("8")}>8</NumButton>
          <NumButton onClick={() => handleClick("9")}>9</NumButton>
          <OperatorButton onClick={() => handleClick("*")}>*</OperatorButton>
        </Grid>
        <Grid item>
          <NumButton onClick={() => handleClick(".")}>.</NumButton>
          <NumButton onClick={() => handleClick("0")}>0</NumButton>
          <OperatorButton onClick={() => handleClick("/")}>/</OperatorButton>
        </Grid>
        <Grid item>
          <OperatorButton onClick={handleEvaluate}>=</OperatorButton>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
        </Grid>
      </CalculatorWrapper>
    </>
  );
}

export default Calculator;
