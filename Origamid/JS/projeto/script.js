const animais = document.getElementById("animais");
console.log(animais);

//quando selecionamos por id, caso o elemento não exista, ele retornará null

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[1]);

//QUERY SELECTOR
const primeiraLi = document.querySelector("li");
const primeiraUl = document.querySelector("ul");

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

//Query selector all
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg, animaisImg[2]);

//HTMLCOLLECTION VS NODELIST - A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

//console.log(gridSectionHTML, gridSectionHTML[2]); //retorna 4 itens no total, pois é 'ao vivo'
//console.log(gridSectionNode, gridSectionNode[2]); //retorna 3 itens no total, pois é estática

//ARRAY-LIKE
//uma NodeList possui alguns métodos como o forEach:
gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

//um HTML collection não possui metodos de array, como por exemplo o forEach. portanto, podemos transformá-los em uma array real para utilizar seus métodos:
const arrayGrid = Array.from(gridSectionHTML);
console.log(gridSectionHTML);
//depois da transformação acima, podemos utilizar o forEach
arrayGrid.forEach(function (item, index) {
  console.log(index);
});

// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll("img");
console.log(allImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const internLinks = document.querySelectorAll("[href^='#']");
console.log(internLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescription = document.querySelector(".animais-descricao h2");
console.log(animaisDescription);

// Selecione o último p do site
const paragraph = document.querySelectorAll("p");
lastParagraph = paragraph[--paragraph.length]; //ou paragraph[paragraph.length - 1]
console.log([lastParagraph]);

//FOREACH
const images = document.querySelectorAll("img");
images.forEach(function (item, index, array) {
  //console.log(item, index, array);
});

//novamente, transformando um array-like (neste caso, HTMLCollection) que não possuem o método forEach em uma array real para utilizá-lo:
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

//ARROW FUNCTION - encurta a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
titulosArray.forEach((item) => {
  console.log(titulosArray[1]);
});

//alguns detalhes da sintaxe da arrow function
const imgs = document.querySelectorAll("img");

// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  //a IDE colocou os () automatico no autosave
  console.log(item);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

//É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs2 = document.querySelectorAll("img");
imgs2.forEach((item) => console.log(item));

//EXERCICIOS
// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const eachParagraph = document.querySelectorAll("p");
eachParagraph.forEach((item, index) => console.log(item.innerText, index));

//Como corrigir os erros abaixo:
const imgs3 = document.querySelectorAll("img");

imgs3.forEach((item, index) => {
  console.log(item, index);
});

let index = 0;
imgs3.forEach(() => {
  console.log(i++);
});

imgs3.forEach(() => index++);
