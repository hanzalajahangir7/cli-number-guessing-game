#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "enter your number",
    type: "number",
    message: "select number from 1-6",
  },
]);

const number = Math.floor(Math.random() *6 + 1);

if (number === answer) {
  console.log("good you are correct");
} else {
  console.log("sorry try again");
}
