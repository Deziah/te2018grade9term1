const READLINE = require("readline-sync");

// **** Problem 1: printMessage() ****
// Write a function that prints any message you want.
let message = function(){
	console.log("My name is Deziah")
}

// **** Problem 2: printFiveMessages() ****
// Write a function that calls printMessage() five times.
let printMessage = function(){
message();
message();
message();
message();
message();
}
printMessage();

// **** Problem 3: getUserInput() ****
// Write a function that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on
// what the user decides.
let user = READLINE.question("Would you like to print your message once or five times?")
 if(user == "once" || user == "1"){
 	console.log(message())
 }else{
 	console.log(printmessage());
 }




// **** Problem 4: printGreeting() ****
// Write a function that prints a greeting message to the user.


// **** Problem 5: printClosing() ****
// Write a function that prints a goodbye message to the user.


// **** Problem 6: run() ****
// Write a function that runs the whole program by calling functions in this
// order:
// 1) printGreeting()
// 2) getUserInput()
// 3) printClosing()


// When finished, call your run() function below to run the whole program!


