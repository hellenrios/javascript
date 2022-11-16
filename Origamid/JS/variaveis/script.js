var nome = "Hellen";
var idade = 23;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25;
var totalComprado = 5;

var totalPreco = console.log(totalComprado * preco);

var sobrenome = "Rios",
  cidade = "Rio";

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

/* nomes de variáveis
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

//Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

Hoisting

São movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = "André";
// Retorna undefined

var profissao = "Designer";
console.log(profissao);
// Retornar Designer


Mudar o valor atribuído
É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro

*/

//Exercicios
// Declarar uma variável com o seu nome
let name = "Hellen";

// Declarar uma variável com a sua idade
let age = 24;

// Declarar uma variável com a sua comida favorita e não atribuir valor
let favFood;

// Atribuir valor a sua comida favorita
favFood = "sushi";

// Declarar 5 variáveis diferentes sem valores
let one, two, three, four, five;

console.log(name, age, favFood, one, two, three, four, five);
