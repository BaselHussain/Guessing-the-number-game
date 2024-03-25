#! /usr/bin/env node
import inquirer, { QuestionCollection } from "inquirer"
var questions:QuestionCollection=[{
    name:"Usernumber",
    type:"number",
    message:"Enter your number between 1 to 10"
}]
var random_number:number=Math.floor(Math.random()*10+1);
var guess=await inquirer.prompt(questions);
if(guess.Usernumber===random_number){
    console.log("Congratulations!You guessed right")
} else{
    console.log("Oops! Try again")
}
