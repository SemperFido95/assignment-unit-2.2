// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// declaring a variable named 'name' and that variable's value is equal to the string 'Dane'
// The next 3 lines are a conditional statement that checks if the variable 'name' is equal to the value of 'Mary'
// if expression evalutes to true, the string 'Hi Mary' will be logged to the console
// if expression evalutes to false, the string 'How do you do?' will be logged to the console

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// declaring a variable named 'secret' with no value and another variable named 'code' with a value of 123
// conditional statement which checks if the variable 'code' has a value of 123
// First conditional checks if the variable 'code' is equal to the value of 123
// secret will be assigned a value of 'super' if true, and the value of code will be multiplied by 2
// Second conditional checks if the value of code is greater than 250
// secret is assgined a value of 'duper' if the value of 'code' is greater than 250
// the value of secret will be logged to the console (secret's value is 'super' since the second conditional is false)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 3 variables are declared and assigned values of different data types
// a conditonal statement evaluates multiple different expressions in order
// if the first 'if's statement is true, the code block immediately after will run and the conditional ends
// if the if statement is false, the code block will move on to the next if statement until one of the expressions is true
// if none of the if statements evaluate to true, the else code block will run by default
// in this case, 'Welcome to Prime!' is logged to the conosle since the first two if statements evalualute to false 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// colorOne and colorTwo's values should be switched. 
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


// add colorTwo = 'purple' into the conditonal code block
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
time should be declared with the 'let' keyword so it can be changed later

// Change || to && in the code below
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

swap the console.log statements; since the conditional evaluates to true, the first console.log statement will run and the code block will stop.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

