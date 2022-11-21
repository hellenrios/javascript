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
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//TERNÁRIO
let idade = 14;
let apresentaId = true;
let podeBeber = idade >= 18 && apresentaId ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

//podemos retornar qualquer tipo de dado nos ternários. porém, não faz sentido retornar booleano pois o ternário já retorna true ou false.
//exemplo no ultimo exercicio.
//a estrutura do ternário é condição ? true : false

//IF ABREVIADO e outras sintaxes válidas - Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
let possuiFaculdade = true;
if (possuiFaculdade) console.log("possui faculdade");
else console.log("não possui faculdade");

//ou

if (possuiFaculdade) console.log("possui faculdade");
else console.log("não possui faculdade");

//EXERCICIOS
// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = possuiCarro && possuiCasa;
console.log(darCredito);

//ESCOPO - evita o conflito entre nomes.

//Escopo de Função - variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//Variável Global (Erro) - declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

//'use strict' impede isso.

//Escopo de Função (Pai) - variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

//Escopo de Bloco - variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro

// var vaza o Bloco - mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined

//Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined

//Const - mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
//mes = "Janeiro"; // erro, tentou modificar o valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
//data = "Janeiro"; // erro

//Let - mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
//geralmente vamos utilizar o const.

//EXERCICIO
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//console.log(var, marca, portas);

//nao foi colocado o nome da variavel no console.

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

//O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
