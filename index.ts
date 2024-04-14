#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any  = {
  USD: 1,
  EUR: 0.94,
  GBP: 0.8,
  SAR: 3.75,
  AED: 3.67,
  PKR: 277,
  INR: 83.61,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR", "INR"],
    message: "Select from currency",
  },
  {
    name: "to",
    type: "list",
    choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR", "INR"],
    message: "Select to currency",
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount",
  },
]);

let fromAmount = currency [user_answer.from]
let toAmount = currency [user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

