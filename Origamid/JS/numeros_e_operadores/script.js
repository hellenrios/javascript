let idade = 23;
let gols = 1000;
let pi = 3.14; //ponto para decimal
let exp = 2e10; //20000000000 (a quantidade que vier após o e será a quantidade de 0 que terá)
let exp2 = 2e-2; //0.02

console.log(exp);

let soma = 100 + 50; //150
let subtracao = 100 - 50; //50
let multiplicacao = 100 * 2; //200
let divisao = 100 / 2; //50
let expoente = 2 ** 4; //16 (2 x 2 x 2 x 2)
let modulo = 14 % 5; //4 (resto da divisao / restante inteiro)

let soma2 = "100" + 50; //10050 (concatena e retorna string)
let subtracao2 = "100" - 50; // ele vai retornar number, tentar converter e realizar a operacao pois nao tem como subtrair strings
let multiplicacao2 = "100" * "2"; //200 retorna number tambem
let divisao2 = "comprei 10" / 2; // NaN, como tem caracter alem no numero ele nao consegue converter

console.log(typeof divisao2);

//verificando se uma variavel é NaN ou não
console.log(isNaN(divisao2));

//a ordem importa
//Começa por multiplicacao e divisao, depois por soma e subtracao
//parenteses para priorizar uma expressao

let total1 = 20 + 5 * 2; //30
let total2 = (20 + 5) * 2; //50
let total3 = (20 / 2) * 5; //50
let total4 = 10 + 10 * 2 + 20 / 2; //40

//Operadores aritméticos unários
let incremento = 5;
console.log(incremento++); //5  //ou ++incremento
console.log(incremento); //6
console.log(++incremento); //incrementa na hora, diferente do ++ depois da variavel

//drecremento: --x ou x--

//O + e o - tenta transformar o valor de string em número, se não houver outro caracter além de numeros
let idade2 = "23"; // ou + "23";
+idade2;
// ou -idade2 // -23
console.log(typeof +idade2);
console.log(+idade2 + 5);
console.log(-idade2 + 24); //1

//EXERCÍCIOS
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
//35
console.log(total);

// Crie duas expressões que retornem NaN
let exp1 = "200a",
  exp3 = "20";
console.log(exp1 / exp3);

let exp4 = "s300";
exp5 = 20;
console.log(exp4 * exp5);
// Somar a string '200' com o número 50 e retornar 250
let num1 = "200";
num2 = 50;
let sum = console.log(+num1 + num2);

// Incremente o número 5 e retorne o seu valor incrementado
let increment = 5;
console.log(++increment);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'

// peso = `${+numero / 2} ${unidade}`; - forma mais complexa
console.log(peso);
