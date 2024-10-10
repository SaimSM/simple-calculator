// let displayValue = "";

// function appendToDisplay(value) {
//     displayValue += value;
//     document.getElementById("display").value = displayValue;
// }

// function clearDisplay() {
//     displayValue = "";
//     document.getElementById("display").value = displayValue;
// }

// function calculate() {
//     try {
//         displayValue = eval(displayValue).toString();
//         document.getElementById("display").value = displayValue;
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }
// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
// //   })
// function appendToResult(value) {
//     document.getElementById('result').value += value;
//   }

//   function calculate() {
//     try {
//       const result = eval(document.getElementById('result').value);
//       document.getElementById('result').value = result;
//     } catch (error) {
//       document.getElementById('result').value = 'Error';
//     }
//   }

//   function clearResult() {
//     document.getElementById('result').value = '';
//   }
  // function "clearResult()"   









  // const result = document.getElementById("result");
  // const buttons = document.querySelectorAll(".buttons button");
  
  // buttons.forEach(button => {
  //   button.addEventListener("click", () => {
  //     if (button.value === "=") {
  //       result.value = eval(result.value);
  //     } else if (button.value === "C") {
  //       result.value = "0";
  //     } else {
  //       result.value += button.value;
  //     }
  //   });
  // });
  
// function calculate() {
//     try {
//         displayValue = eval(displayValue).toString();
//         document.getElementById("display").value = displayValue;
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }
// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
//   })
//  function appendToResult(value) {
//     document.getElementById('result').value += value;
//   }






const calculator = (expression) => {
  // Split the expression into tokens.
  const tokens = expression.split(/(\+|-|\*|\/)/);

  // Evaluate the tokens recursively.
  const evaluate = (tokens) => {
    if (tokens.length === 1) {
      return parseFloat(tokens[0]);
    }

    const operator = tokens.shift();
    const left = evaluate(tokens);
    const right = evaluate(tokens);

    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      default:
        throw new Error("Invalid operator");
    }
  };

  return evaluate(tokens);
};

// Add an event listener to the "=" button.
document.getElementById("=").addEventListener("click", () => {
  // Get the expression from the input field.
  const expression = document.getElementById("result").value;

  // Evaluate the expression and display the result.
  document.getElementById("result").value = calculator(expression);
});








