const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from the inside of the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares herself, and opens the door. A clown pops out and scares her.`+
              "She continues walking until she walks into a dark and mysterious kitchen.");

let enterKitchen = READLINE.question("Do you want to enter the kitchen?")
        if(enterKitchen == "y" || enterKitchen == "yes") {
          player.courage++;
          console.log(`${player.name} walks in and sees a bloody knife on a pure white counter top.`);

let pickKnife = READLINE.question("Do you want to get knife and go investigate?")
        if(pickKnife == "y" || pickKnife == "yes") {
          player.courage++;
          console.log(`when ${player.name} turns around, theres a trail of blood leading her around the corner.` +
                     `when ${player.name} turns the corner, she meets a man who was waiting to let her face her death.`
       
        }else {
          player.intellect++;
          console.log(`${player.name} heared a strange voice coming from somewhere. It said "You are free to go. You have made a wise decision to mind you business. You are known as a noble player in the records of this game. Congratulations. You may leave now." `

        }

      } else {
         player.intellect++;
         console.log(`${player.name} turns around and opens a closet door and sees a hidden stairwell and goes down it.`+
                    `The stairway is dark so she takes out her ${player.item} and turns it on. The light reveals 6 dead bodies on the floor, covered in white sheets. Some of them are bloody and some aren't.`+
                    `${player.name} goes down the stairs and hear noise coming from around the corner.` +
                    `She turns around the corner and when she does she sees a beast who has awakened from her presence.` +
                    `The beast runs towards her. But then he stops and admires her beauty. He decides that he wants to spend the rest of his immortal life with her.`+
                    `So he bites ${player.name}, turning her like him and someway, somehow, they live happily ever after.`
      }

      } else {
         player.intellect++;
         console.log(`${player.name} player tries to walk away, but is pushed into the door.`+
                    "When past the door, there's a bright walkway on the left and right side of her."+
                    `${player.name} walks up to the card, picks it up and reads it. It said, 'Continue if you dare.`)

let continue = READLINE.question("Do you want to continue?")

      if(continue == "y" || continue == "yes") {
        player.intellect++; 
        console.log(`${player.name} walks into a kitchen and sees a pitbull tied down to a counter stool.`)

let seePitbull = READLINE.question("Do you want to pet it?")
      
      if(continue == "y" || continue == "yes"){
      player.courage++;
      console.log(`${player.name} gets bitten by the pitbull. She gets poisoned and instantly dies.`)
      
      }else{
        player.intellect++;
        console.log(`${player.name} runs from the pitbull and it starts to chase her. She looks back while running. She trips over her own feet, falls, hits her head and then bleeds to death.`)

       }

      } else {
         player.intellect++;
         console.log(`${player.name} tries to walk back out the door, but is tripped and then is dragged to` +
                    `the kitchen by her ankle. ${player.name} struggles too much. She hits her head and bleeds to death.`)
      }

}
console.log("Thanks for playing!");
