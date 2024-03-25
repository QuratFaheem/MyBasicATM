#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let amount: number = 20000;

console.log(chalk.bgBlueBright("WELCOME TO MYBANK ATM USING TYPESCRIPT."));
//console.log("Kindly Enter your ID and Password to proceed");

const { operator } = await inquirer.prompt([
  {
    name: "operator",
    type: "list",
    message: "Choose your transaction Please",
    choices: ["CheckBalance", "Deposit", "Withdrawl"],
  },
]);

switch (operator) {
  case "CheckBalance":
    console.log("You have the Balance of Rs.:", amount,'in your Account');
    break;

  case "Deposit":
    const depositAmountInput = await inquirer.prompt([
      {
        name: "deposit",
        type: "number",
        message: "Enter your Amount to Deposit",
      },
    ]);
    const depositAmount = depositAmountInput.deposit;
    amount += depositAmount;
    console.log(
      `Your Transaction is successfully processed, Now your Total Balance in account is ${amount} Rs`
    );
    break;

  case "Withdrawl":
    const withdrawlAmountInput = await inquirer.prompt([
      {
        name: "withdrawl",
        type: "number",
        message: "Enter your Amount to Withdrawl",
      },
    ]);
    const withdrawlAmount = withdrawlAmountInput.withdrawl;
    if (amount >= withdrawlAmount) {
      amount -= withdrawlAmount;
      console.log(
        `Your Transaction is successfully processed, Now your Total Balance in account is ${amount} Rs`
      );
    } else {
      console.log(
        "Can not proceed with your transaction, check your balance and try again"
      );
    }
    break;

  default:
    console.log("Select transaction type to proceed");
}
console.log('Thank you for using MyBANK basic ATM with Typescript.');
