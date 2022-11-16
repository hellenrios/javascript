//FUNÇÕES
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma funçao e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4);

console.log(areaQuadrado(4)); //16    //ativando funcao
console.log(areaQuadrado(5)); //25
areaQuadrado(2); //4

//

function pi() {
  return 3.14;
}

console.log((total = 5 * pi()));

//parenteses executa uma funcao!

//PARAMETROS E ARGUMENTOS
//Ao CRIAR uma funcao, voce pode definir PARÂMETROS.
//Ao EXECUTAR uma funcao, voce pode passar ARGUMENTOS.

function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

//voce pode definir mais de um parametro ou nenhum tbm.

//PARENTESES EXECUTA A FUNCAO

function corFavorita(cor) {
  if (cor === "azul") {
    return "tu gosta de azul";
  } else if (cor === "amarelo") {
    return "tu gosta de amarelo";
  } else if (cor === "verde") {
    return "tu gosta de verde";
  } else {
    return "tu nao gosta de nada";
  }
}

console.log(corFavorita());
console.log(corFavorita("amarelo"));

//ARGUMENTOS PODEM SER FUNCOES
//Chamadas de callback, geralmente são funçoes que ocorrem apos algum evento.

addEventListener("click", function () {
  console.log("clicou!");
});

//a funcao possui argumentos
//primeiro é a string 'click'
//segundo é uma funcao anonima

//funcoes anonimas sao aquelas em que o nome da funcao nao é definido, escritas como function () {} ou () => {}

//a funcao pode ou nao retornar um valor. quando nao definimos o return, ela irá retornar undefined. o bloco de código será executado normalmente e poderá gerar um valor se mostrado no console.log, mas o final será undefined.

function imc2(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc);
}

console.log(imc2(90, 1.9));
imc2(60, 1.7);

//Valores retornados - uma funcao pode retornar qualquer tipo de dado, ate outras funcoes. porem, retornar diferentes tipos de dados na mesma funcao nao é uma boa ideia.
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "você nao preencheu umnúmero. informe um número.";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(30));
//ESCOPO
//Variáveis e funcoes dentro de um bloco {}, nao sao visiveis fora dele.

function precisoVisitar(paisesVisitados) {
  let totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países.`;
}

console.log(precisoVisitar(80));

//ESCOPO LÉXICO
//Funcoes sempre conseguem acessar variaveis que foram criadas no contexto PAI.

let profissao = "designer";

function dados() {
  let nome = "Hellen";
  let idade = 23;
  function outrosDados() {
    let cidade = "rj";
    let rua = "rua da gloria";
    return `${nome}, ${idade}, ${cidade}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); //retorna 'hellen, 23, rj, rua da glória'
//console.log(outrosDados()); //retorna erro

//HOISTING
//antes de executar uma funcao, o js 'move' as funcoes declaradas para a memoria

//EXERCICIOS
//1
function checandoTruthy(valor) {
  console.log(!!valor);
}

checandoTruthy(1);

//2
function perimetro(lado) {
  return lado * 4;
}

perimetro(10);

//3
function nomeCompleto(nome, sobrenome) {
  return `Seu nome é ${nome} ${sobrenome}`;
}

console.log(nomeCompleto("hellen", "caldas rios"));

//4
function checaPar(numero) {
  numero = Number(prompt("Insira um número: "));
  if (numero % 2 === 0) {
    return "o número é par.";
  } else {
    return "o número é ímpar.";
  }
}

console.log(checaPar());

//5
function verificandoTipo(dado) {
  return typeof dado;
}

console.log(verificandoTipo(true));

//6
addEventListener("scroll", function () {
  console.log("hellen caldas rios");
});

//7
let totalPaises2 = 193;

function precisoVisitar2(paisesVisitados2) {
  return `Ainda faltam ${totalPaises2 - paisesVisitados2} países para visitar.`;
}

function jaVisitei(paisesVisitados2) {
  return `Já visitei ${paisesVisitados2} do total de ${totalPaises2} países`;
}

precisoVisitar2(20);
jaVisitei(20);

// function cumprimenta(nomeDoUsuario, periodoDoDia = "manhã") {
//   console.log(`Olá ${nomeDoUsuario}. Estamos do período da ${periodoDoDia}`);
// }

// cumprimenta("Joaquina");
