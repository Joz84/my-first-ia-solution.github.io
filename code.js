const createMessage = (answer) => {
  let message = "";
  if (answer < 10 && answer > 0) {
    message = messages[0];
  } else if (answer >= 10 && answer < 20) {
    message = messages[1];
  } else if (answer >= 20) {
    message = messages[2]
  }
  return message;
};

const messages = [
 "On est dans mon frigo",
 "On peut commencer à mettre des tongs",
 "On va tous à Tahiti (et Pierre est ?)"
];

// # Afficher ces résultats
console.log("Tu seras dans une de ses catégories :");
for(const message of messages) {
  console.log("- " + message);
};

// let input = prompt("Ta température ?\n> ");
// const answer = parseInt(input);

const answer = 30;
const message = createMessage(answer);
console.log(message);



// Exemple

// function displayHelloWorld(language) {
//   if (language === "fr") {
//     return "Bonjour le monde";
//   } else if (language === "en") {
//     return "Hello world";
//   }
// };


// const displayHelloWorld = (language) => {
//   if (language === "fr") {
//     return "Bonjour le monde";
//   } else if (language === "en") {
//     return "Hello world";
//   }
// };


// const message_fr = displayHelloWorld("fr");
// console.log(message_fr);

// const message_en = displayHelloWorld("en");
// console.log(message_en);
