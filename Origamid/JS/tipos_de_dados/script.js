//primitivos sao dados imutáveis
let nome = "Hellen";
let sobrenome = "Rios";
console.log(typeof nome);
let simbolo = Symbol();
console.log(typeof simbolo);
//concatenando
console.log("Meu nome é " + nome + " " + sobrenome);
//template string
console.log(`Meu nome é ${nome} ${sobrenome}.`);

/*Aspas Duplas, Simples e Template String
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido*/

var gols = 1000;
var frase = `Romário fez ${gols * 2} gols.`;
console.log(frase);

//exercícios
// Declare uma variável contendo uma string
let name = "Hell";

// Declare uma variável contendo um número dentro de uma string
let numberString = "24";
// Declare uma variável com a sua idade
let myAge = 24;

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
let name2 = "Hell",
  age2 = 23;
console.log((namePlusAge = `${name2} ${age2}`));

// Coloque a seguinte frase em uma variável: It's time
console.log((phrase = "it's time!"));
// Verifique o tipo da variável que contém o seu nome
let verifyTypeName = typeof name;
console.log(verifyTypeName);
