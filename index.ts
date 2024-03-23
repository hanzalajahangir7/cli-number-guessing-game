#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Hanzala Jahangir CLI-Number-Guessing-Game")

const answer = await inquirer.prompt([
  {
    name: "enter your number",
    type: "number",
    message: "select number from 1-6",
  },
]);

const number = Math.floor(Math.random() * 6 + 1);
console.log(number)

if (answer === number) {
  console.log("good you are correct");
} else {
  console.log("sorry try again");
}
