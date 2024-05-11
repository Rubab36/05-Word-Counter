#! /usr/bin/env node
// importing inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
// Display Message
console.log(chalk.bold.magentaBright("\n \t \t Word-Counter \n"));
console.log("=".repeat(60));
// prompt to get sentence from user
let sentence = await inquirer.prompt([
    {
        name: "answer",
        type: "input",
        message: "Enter your sentence here: ",
    }
]);
// trimming sentence into words
let words = sentence.answer.trim().split(" ");
// Analysis the words counter
console.log("=".repeat(60));
console.log(chalk.bold.cyanBright("- sentence words: "));
console.log(words);
console.log(`\n Word Count: ${chalk.bold.yellowBright(words.length)}`);
console.log("=".repeat(60));
