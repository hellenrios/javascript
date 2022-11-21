//1
//alert("Olá mundo!");

const { src } = require("gulp");

//2
// let num1 = parseInt(prompt("Insira o primeiro número da soma: "));
// let num2 = parseInt(prompt("Insira o segundo número da soma: "));
// let sum = alert(num1 + num2);

//4
let showName = document.querySelector(".js-button");
let inputName = document.querySelector(".inputName");

showName.addEventListener("click", function () {
  alert(`O nome completo é: ${inputName.value}`);
});

//5
let inputCharacters = document.querySelector(".insert-characters").value;
let countCharacters = document.querySelector(".count-characters");

countCharacters.addEventListener("click", function () {
  alert(inputCharacters.length);
});

//6
let lampOn = (document.querySelector(".lamp").src =
  "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true");

// lampOn.addEventListener("click", function () {
//   lampOn.src =
//     "";
// });
