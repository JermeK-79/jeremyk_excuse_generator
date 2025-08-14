import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  //console.log("Hello Rigo from the console!");

  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed on ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when =['before class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.'];

  let randomNumber1 = Math.floor(Math.random() * who.length);
  let randomNumber2 = Math.floor(Math.random() * action.length);
  let randomNumber3 = Math.floor(Math.random() * what.length);
  let randomNumber4 = Math.floor(Math.random() * when.length);

  let theWho = who[randomNumber1];
  let theAction = action[randomNumber2];
  let theWhat = what[randomNumber3];
  let theWhen = when[randomNumber4];

  let excuse = theWho + theAction + theWhat + theWhen;

  //console.log(excuse);

  let htmlElement = document.querySelector('#excuse');

  //console.log(htmlElement)

  htmlElement.innerHTML = excuse;
};
