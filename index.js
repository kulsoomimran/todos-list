#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.bold("\n\t\t  Todo - List \t\t\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.cyan.bold("What do you want to add in your Todo - List ?")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.green(addTask.task), chalk.blueBright(" is added in your Todo - List"));
    let addMore = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: chalk.magenta("Do you want to add more in your Todo - List ?"),
            default: "false"
        }
    ]);
    conditions = addMore.more;
}
console.log(chalk.yellowBright("Your Todo - List is "), chalk.redBright(todoList));
