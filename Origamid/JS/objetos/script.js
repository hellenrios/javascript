//objetos - conjunto de variaveis e funcoes, que sao chamadas de propriedades e metodos.

let pessoa = {
  nome: "hellen",
  idade: 23,
  profissao: "desenvolvedora de software",
  possuiFaculdade: false,
};

console.log(pessoa.nome); //'hellen'
pessoa.possuiFaculdade; //true

//METODOS - é uma propriedade que possui uma funcao no local do seu valor

let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//ABREVIACAO de area: function () {} para area() {} no ES6+ (funciona igual o de cima, pode ou nao ter parametro)

let quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

//Objetos servem para organizar o código em pequenas partes reutilizáveis.

//Math é um objeto nativo de JS.

Math.PI; //3.14
Math.random(); //número aleatório

let pi = Math.PI;
console.log(pi);

//Criar um objeto - utiliza-se chaves {}

let carro = {};
console.log(typeof carro);

//DOT NOTATION GET - acesse propriedades de um objeto utilizando o ponto .
//DOT DONATION SET - substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

let menu = {
  width: 800,
  heigth: 50,
  backgroundColor: "#84E",
};

let bg = menu.backgroundColor; //'#84E'

//setando novos valores (mudar o valor):
menu.backgroundColor = "#000";

//adicionar novas propriedades e métodos:
menu.color = "blue";

menu.esconder = function () {
  console.log("escondi");
};

console.log(menu);

//para adicionar propriedades e métodos, basta adicionar um novo nome e definir o valor.

let menu2 = {
  width: 800,
};

menu2.height = 50;
menu2.position = "fixed";

console.log(menu2);

//THIS - irá fazer referência ao próprio objeto.

let height = 120;
let menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.heigth / 2;
  },
};

menu3.metadeHeight(); //25
//sem o this, seria 60 (pegaria o height que foi declarado na let de fora)

//HERANÇA - o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

let menu4 = {
  width: 800,
};

menu.hasOwnProperty("width"); //true
menu.hasOwnProperty("heigth"); //false

//EXERCICIOS
//1

let personalData = {
  name: "Hellen",
  middleName: "Caldas",
  age: 23,
  occupation: "front-end developer",
};

//2
personalData.showName = function () {
  return `${this.name} ${this.middleName}`;
};

console.log(personalData);

//3
let car = {
  price: 10000,
  doors: 4,
  label: "Audi",
};

car.price = 30000;

console.log(car);

//4
let dog = {
  breed: "labrador",
  color: "black",
  age: 10,
  barks(pessoa) {
    if (pessoa === "homem") {
      return "Au au!!";
    } else {
      return "the dog is sleeping.";
    }
  },
};

console.log(dog.barks(""));
console.log(dog.barks("homem"));

jsdgfj;
