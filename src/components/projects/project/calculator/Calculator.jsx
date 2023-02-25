import { useEffect, useState } from "react";

import "./Calculator.css";

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
      // Remove event listener when component unmounts
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <h1 className="calc_title">Calculator</h1>
      <dir className="calculator_wrapper">
        <div>
          <input
            type="text"
            value={expression}
            readOnly
            className="calc_input"
          />
        </div>
        <div>
          <button onClick={() => handleClick("1")} className="num">
            1
          </button>
          <button onClick={() => handleClick("2")} className="num">
            2
          </button>
          <button onClick={() => handleClick("3")} className="num">
            3
          </button>
          <button onClick={() => handleClick("+")} className="calc_plus">
            +
          </button>
        </div>
        <div>
          <button onClick={() => handleClick("4")} className="num">
            4
          </button>
          <button onClick={() => handleClick("5")} className="num">
            5
          </button>
          <button onClick={() => handleClick("6")} className="num">
            6
          </button>
          <button onClick={() => handleClick("-")} className="calc_minus">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleClick("7")} className="num">
            7
          </button>
          <button onClick={() => handleClick("8")} className="num">
            8
          </button>
          <button onClick={() => handleClick("9")} className="num">
            9
          </button>
          <button onClick={() => handleClick("*")} className="calc_multiply">
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleClick(".")} className="num">
            .
          </button>
          <button onClick={() => handleClick("0")} className="num">
            0
          </button>
          <button onClick={() => handleClick("/")} className="calc_divide">
            /
          </button>
        </div>
        <div>
          <button onClick={handleEvaluate} className="calc_smooth">
            =
          </button>
          <button onClick={handleClear} className="calc_clear_btn">
            Clear
          </button>
        </div>
      </dir>
    </>
  );
}

export default Calculator;
