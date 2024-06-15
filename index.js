#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.bold("\n\t\t  Todo - List \t\t\n"));
let newTask = await inquirer.prompt([
    {
        name: "new",
        type: "input",
        message: chalk.cyan.bold("What do you want to add in your Todo - List ?"),
    },
]);
todoList.push(newTask.new);
console.log(chalk.green(newTask.new), chalk.blueBright(" is added in your Todo - List successfully !!"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellowBright("What you want to do in your Todo List? Select any one option: "),
                choices: [
                    "View List",
                    "Add Task",
                    "Delete Task",
                    "Update List",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "View List") {
            await viewTask();
        }
        else if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update List") {
            await updateTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
            console.log(chalk.redBright("Thanks for using Todo List"));
        }
    }
};
let viewTask = async () => {
    console.log(chalk.blueBright("\n Your  Todo - List is : \n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.cyan.bold("Enter your new task: "),
        },
    ]);
    todoList.push(newTask.task);
    console.log(chalk.green(newTask.task), chalk.blueBright(" : is added in your Todo - List successfully!!! "));
};
let deleteTask = async () => {
    await viewTask();
    let taskforDelete = await inquirer.prompt([
        {
            name: "delete",
            type: "input",
            message: chalk.cyan.bold("Enter the task number you want to delete"),
        },
    ]);
    let deleteTask = todoList.splice(taskforDelete.delete - 1, 1);
    console.log(chalk.redBright(deleteTask[0]), chalk.blueBright(": is deleted from your todo - list successfully!!!"));
};
let updateTask = async () => {
    await viewTask();
    let taskforUpdate = await inquirer.prompt([
        {
            name: "taskNumber",
            type: "input",
            message: chalk.cyan.bold("Enter the task number you want to update"),
        },
        {
            name: "update",
            type: "input",
            message: chalk.cyan.bold("Now enter the new task:"),
        },
    ]);
    todoList.splice(taskforUpdate.taskNumber - 1, 1, taskforUpdate.update);
    console.log(chalk.redBright(taskforUpdate.update), chalk.blueBright(": is updated successfully in your Todo - List !!!"));
};
main();
