import inquirer from "inquirer";

async function calculator() {
  let response = await inquirer.prompt([
    {
      name: "firstNumber",
      message: "Enter First Number",
      type: "number",
    },
    {
      name: "secondNumber",
      message: "Enter Second Number",
      type: "number",
    },
    {
      name: "operator",
      message: "Select Operator",
    //   type: "list",
      type: "checkbox",
      choices: ["+", "-", "/", "*"],
    },
  ]);

  const { firstNumber, secondNumber, operator } = response;

  if (operator === "+") {
    let addition: number = firstNumber + secondNumber;
    console.log(`Sum of these numbers is ${addition}`);
  } else if (operator === "-") {
    let substraction: number = firstNumber - secondNumber;
    console.log(`Substraction of these numbers is ${substraction}`);
  }else if(operator === "/"){
    let division: number = firstNumber / secondNumber;
    console.log(`Division of these numbers is ${division}`);
  }else if(operator === "*"){
    let multiplication: number = firstNumber * secondNumber;
    console.log(`Multiplication of these numbers is ${multiplication}`);
  }else{
    console.log("Please Select the right Operator")
  }
}

calculator();
