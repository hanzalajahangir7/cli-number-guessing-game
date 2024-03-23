#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Hanzala Jahangir CLI-Number-Guessing-Game")

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number from 1-6",
  },
]);

const randomnumber = Math.floor(Math.random() * 6 + 1)
console.log(randomnumber)

if (answers.userGuessedNumber === randomnumber) {
  console.log("good you are correct");
} else {
  console.log("sorry try again");
}
