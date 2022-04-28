//console.log("working");

//Functions - In order to execute a particular line of code repititively, we can allocate them into
// a function, which can then be called again and again as required. This prevents us writing a piece of code multipe times

//function definition from lines 6 to 8
//we need to have n no of parameter for n number of arguments passed while calling the functions catch the arguments in the sequence they are passed
//function multiply(parameter1, parameter2){
 //   console.log("Inside multiply function");
    //the function body can have more than one line of code.
//}

//function calling on line 11
//multiply(arg1, arg2);//name of a function followed by open and close parenthesis
//while we call a function we pass arguments inside the parenthesis, if we have to pass
// any values otherwise not neccessary to pass arguments. The arguments passed can be one or 
//many separated by comas.

//Arrow Function------

//const addition = (parameter1, parameter2) => {
 //   console.log("I am addition function");
//}
//addition(arg1,arg2);

//Function Expression
//const subtraction = function(){
   // console.log("I am in subtraction function");
//}
//subtraction(arg1,arg2);

function sayHi(){
    console.log("Hi!!!!");
    let a = 3;
    let b = 6;
    let result = a + b;
    console.log(result);
}
sayHi();

function addition(num1,num2){
    let result = num1 + num2;
    console.log(result);
}
addition(3,4);

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
};
//let returnedResult = multiply(7,9);
//console.log(returnedResult);

console.log(multiply(7,9));// inside the console.log we can call a function...no issues...
//If our function which is called returns same value , then that returned value will also be printed in our console.log

//The Lexical Environment and Scope Chain

function one(){
    console.log(i);
    two();

    function two(){
        console.log(i);
    }
}
one();
console.log(i);

//----------------------------------------------------

// Block Scope and Shadowing
let f = 2;
const g = 2;
var h = 2;
console.log(f);//2
console.log(g);//2
console.log(h);//2
//let and const are block scoped but not var( globally scoped )
{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);//3
    console.log(g);//3
    console.log(h);//3
}

console.log(f);//2
console.log(g);//2
console.log(h);///3
// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4
