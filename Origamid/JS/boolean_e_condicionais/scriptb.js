Boolean; //false or true. - servem para fazer condicionais

//Condicionais IF e Else - verifica se uma expressão é verdadeira com if, caso contrário o else será ativado.
let possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("possui graduacao");
} else {
  console.log("nao possui graduacao");
}

//o valor dentro do parenteses sempre será avaliado como false ou true.
//Se o if não for verdadeiro, ele testa o else if
let possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("possui graduacao");
} else if (possuiDoutorado) {
  console.log("possui doutorado");
} else {
  console.log("não possui graduação nem doutorado");
}

let name = "";

if (name) {
  console.log(name);
} else {
  ("nome não existe");
}

//Truthy e Falsy - existem valores que retornam true e outros que retornam false quando verificamos em uma expressa2o booleana.
//Falsy :
// if (false)
// if(0)
// if(NaN)
// if(null)
// if(undefined)
// if('')  ou "" ou ``
//Todo resto é truthy.

//ex

let nome = 5 - 5; //5 - 5 = 0
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe.");
}

//Truthy
// if(true)
// if(1)
// if(' ')
// if('hellen')
// if(-5)
// if({})

//Operador lógico de Negação ! - o operador !, nega uma operacao booleana. Ou seja, !true é igual a false

//Truthy
if (!true)
  if (!1)
    if (!"")
      if (!undefined)
        if (!!"  ")
          if (!!"")
            if (!possuiGraduacao) {
              //false
              //false
              //true
              //true
              //true
              //false

              //podemos utilizar o !! para verificar se uma expressao é truthy ou falsy. ex: !!null, !!0, !!'abc'

              console.log(possuiGraduacao);
              console.log("Nao possui graduacao.");
            }

//Operadores de comparação - vão sempre retornar um valor booleano
10 > 5; //true
5 > 10; //false
20 < 20; //false
10 <= 10; //true
10 >= 11; //false

// o == faz uma comparação não tao estrita e o === faz uma comparacao estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===.

10 == "10"; //true
10 == 10; //true
10 === "10"; //false
10 === 10; //true
10 != 15; //true
10 != "10"; //false  (==)
10 !== "10"; //true  (===)

//Operadores lógicos && - compara se uma expressao e a outra é verdadeira. ele retorna o primeiro valor falso ou o ultimo valor verdadeiro
true && true; //true
true && false; //false
false && true; //false
"Gato" && "Cão"; //as duas strings sao truthys.
5 - 5 && 5 + 5; //0 - retorna p primeiro valor falso
"Gato" & false; //false
5 >= 5 && 3 < 6; //true

//se ambos os valores forem true ele irá retornar o ultimo valor verificado. Se algum valor for false ele irá retornar o mesmo e nao irá continuar a verificar os proximos.

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} //falso

let condicional = 5 - 5 && 5 + 5;
if (condicional) {
  console.log("verdadeiro");
} else {
  console.log("falso00");
} //retorna falso pois 5-5 = 0 = falsy

//Operador lógico || - PROCURA O PRIMEIRO VERDADEIRO - compara se uma expressao ou oitra é verdadeira
// true || true //true
// true || false //true
// false || true //true
// 'Gato' || 'Cao' //'Gato' - retorna o primeiro valor verdadeiro
// (5-5) || (5+5) //10 - retorna o valor da conta
// 'Gato' || false //true
// (5>=5) || (3<6) //true

let condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2); //retorna 10 pois é o primeiro verdadeiro

//SWITCH

let corFavorita = "verde";

switch (corFavorita) {
  case "azul":
    console.log("olhe para o céu");
    break;
  case "verde":
    console.log("olhe pzra a grama");
    break;
  case "amarelo":
    console.log("olhe para o sol");
    break;
  default:
    console.log("não faça nada.");
}

//EXERCICIOS
// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let myAge2 = 24;
parentAge = 45;

if (myAge2 > parentAge) {
  console.log("É maior");
} else if (myAge2 === parentAge) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //3
console.log(expressao);

// // Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = "Andre"; // truthy
// var idade = 28; // truthy
// var possuiDoutorado = false; // false
// var empregoFuturo; // false
// var dinheiroNaConta = 0; //false
//console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("brasil tem mais habitantes");
} else {
  console.log("china tem mais habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //retorna o primeiro falso
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //retorna cao, o ultimo valor verdadeiro
} else {
  console.log("Falso");
}
