#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//display a colourfull welcome message
console.log(chalk.bold.blueBright("------------------------------"));
console.log(chalk.bold.italic.blueBright("Welcome to the Word Counter App"));
console.log(chalk.bold.blueBright("------------------------------"));

//promt rhe user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);
//triming the sentencs and splitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

//analysis of user input sentencs

console.log("=".repeat(60));
console.log(chalk.bold.italic.greenBright(" - Analysis of your sentence:"));
console.log(words);
console.log(chalk.bold.italic.greenBright(`\n - word count: ${chalk.bold.italic.redBright(words.length)}`));
console.log("=".repeat(60));





