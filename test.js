//step 1
name_prompt = "What is your name?";
choice_prmpt = `What would you like to do: 
\nChoose 1 for Addition 
\nChoose 2 for Subtraction 
\nChoose 3 for Division 
\nChoose 4 for Multiplication`;

let user_name = prompt("What is your name?");

let user_choice = prompt(choice_prmpt);
console.log(user_name);
console.log(user_choice);

//step 2
let num1 = 0;
let num2 = 0;

let number1_prompt = "Enter the 1st number";
num1 = prompt(number1_prompt);

let number2_prompt = "Enter the 2nd number";
num2 = prompt(number2_prompt);

if (user_choice == 1) {
  let result = add(num1, num2);
  console.log("The addition result is:", result);
}

if (user_choice === 2) {
  let result = subtraction(num1, num2);
  console.log("The subtraction result is:", result);
}

if (user_choice === 3) {
  let result = multiplication(num1, num2);
  console.log("The multiplication result is:", result);
}

if (user_choice === 4) {
  let result = division(num1, num2);
  console.log("The division result is:", result);
}

//addition function definiton

function add(num1, num2) {
  result = num1 + num2;
  return result;
}
//subtraction function definiton

function subtraction(num1, num2) {
  result = num1 - num2;
  return result;
}

//multiplication function definiton

function multiplication(num1, num2) {
  result = num1 * num2;
  return result;
}

//division function definiton

function division(num1, num2) {
  result = num1 / num2;
  return result;
}