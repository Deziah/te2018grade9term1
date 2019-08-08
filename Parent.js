/*const readlineSync = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = readlineSync.question("Did you do your homework? yes/no: ");


if(hw == "yes" || hw == "y") {
	console.log("Great!");
}
else {
	let talkback = readlineSync.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log("Don't talkback to me.")
	}

}

let bath = readlineSync.question("Did you take a shower?");
if(bath == "no") {
	console.log("Go.");
}
else {
	console.log("Good.");
}

let food = readlineSync.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least. I'll start cooking soon.");
}

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);*/

var readlineSync = require("readline-sync");
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');