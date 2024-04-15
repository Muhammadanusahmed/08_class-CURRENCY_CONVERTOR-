#!  /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.67,
    PKR: 280,
};
let main = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "choose your first currency",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "choose your second currency",
        choices: ["PKR", "USD", "EUR", "GBP", "INR"],
    },
    { name: "Amount", type: "number", message: "enter your amount" },
]);
let fromAmount = Currency[main.fromCurrency];
let toAmount = Currency[main.toCurrency];
let baseAmount = main.Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
