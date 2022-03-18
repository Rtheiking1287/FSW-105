var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Pick a number, any number: ");
var secondNum = readlineSync.questionInt("Okay, now just one more number: ");
var userOperation = readlineSync.question("Numbers are all well and good, but now what should I do with them? (add, sub, mul, div): ");

function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

function myCalculator(number1, number2, enteredOperation){
switch (enteredOperation){
    case "add":
        console.log("I guess this is a warm up. The answer is..." + add(number1, number2));
        break;
    case "sub":
        console.log("Try and challenge me! It is...." + sub(number1, number2));
        break;
    case "mul":
        console.log("Oh oh..I know this one! It is..." + mul(number1, number2));
        break;
    case "div":
        console.log("hmmm....is it.." + div(number1, number2) + "?");
        break;
    default:
        console.log("Wait..What was that?? Please try again.") 
    }
}

myCalculator(firstNum, secondNum, userOperation);
