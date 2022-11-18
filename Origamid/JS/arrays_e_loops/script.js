//ARRAY - grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

let videoGames = ["switch", "PS4", "xbox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox
videoGames.pop(); // remove o último item e retorna ele
videoGames.push("3DS"); // adiciona ao final da array
videoGames.length; // 3

//FOR LOOP
for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

//tambem pode ser escrito dessa forma, embora não seja aconselhável:
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

//WHILE LOOP
let i = 0;
while (i < 100) {
  i = i + 5;
  console.log(i);
}

//loop percorrendo array
//break - vai parar o loop

let videoGames2 = ["switch", "PS4", "xbox", "3DS"];

for (let item = 0; item < videoGames2.length; item++) {
  console.log(videoGames2[item]);
  if (videoGames2[item] === "PS4") {
    break;
  }
}

//FOREACH - método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

let frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  frutas.pop();
  console.log(fruta, index, array);
});

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002
let yearsBrazilWon = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
yearsBrazilWon.forEach(function (year) {
  console.log(`Brazil won the Cup of year ${year}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas3 = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
for (let fruta = 0; fruta < frutas3.length; fruta++) {
  console.log(frutas3[fruta]);
  if (frutas3[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
let frutas4 = frutas3[frutas3.length - 1];
console.log(frutas4);

//ATRIBUIÇAO E TERNÁRIO
