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


// const form = document.querySelector("#my-form");
const form = document.getElementById("my-form");

console.log(form);

const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;

form.addEventListener("submit", (event) => {
  console.log("coucou");
  const input = document.getElementById("user-answer");
  answer = input.value
  // message.innerText = createMessage(answer);
  message.innerHTML = createMessage(answer);
  count = count += 1
  counter.innerText = count;
});


// Exemple vu pendant le cours

// function createMessage(answer) {
//   const output = "La réponse de l'utilisateur est : <b>" + answer + "</b>";
//   return output
// }

// const createMessage = (answer) => {
//   const output = `La réponse de l'utilisateur est : <b> ${answer} </b>`;
//   return output
// }

// const list = document.querySelector("#bande-a-picsou");

// list.insertAdjacentHTML("beforeend", "<li>Voja</li>" )

// const titleH1 = document.querySelector("#title-h1");

// console.dir(titleH1);

// titleH1.addEventListener( "click", (event) => {
//     console.dir(event.target.innerText);
//     titleH1.insertAdjacentHTML("", );
// } );

// const ducks = ["Audrey", "Bob", "Coco"]
// // = document.querySelectorAll("li");

// ducks.forEach((duck) => { console.log(duck) });
