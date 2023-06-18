let block = document.createElement("div");
document.body.appendChild(block);
block.className = "container-sm con";
let value = document.createElement("h1");
value.innerText = "calculator";
block.appendChild(value);
let secondCont = document.createElement("div");
document.body.appendChild(secondCont);
secondCont.className = "container-sm cont";
let userinput = document.createElement("input");
secondCont.appendChild(userinput);
userinput.setAttribute("placeholder", "0");
userinput.setAttribute("class", "input-group-text inpu");
userinput.setAttribute("inputType", "readOnly");
let row1 = document.createElement("div");
secondCont.appendChild(row1);
row1.className = "cube";

let numbers = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, ".", "="];
for (i = 0; i < numbers.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = numbers[i];
  row1.appendChild(btn);
  btn.className = "btn btn-info psd";
}
document.querySelector(".psd").addEventListener("click", function () {
  document.querySelector(".inpu").textContent = psd.innerText;
});

if (operands.length === 2) {
  operand1 = parseFloat(operands[0]);
  operand2 = parseFloat(operands[1]);

  let result;
  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      if (operand2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = operand1 / operand2;
      }
      break;
    case "%":
      result = operand1 % operand2;
      break;
    default:
      result = "Error: Invalid operator";
  }

  // Display the result
  resultInput.value = result;
} else {
  resultInput.value = "Error: Invalid expression";
}

// Reset the operator and operands
