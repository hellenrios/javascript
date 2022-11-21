//O QUE É O DOM

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

//conseguimos acessar milhares de propriedades e métodos através do objeto window.

//verificando se a pessoa está em determinada pág, por exemplo
href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5501/DOM/index.html") {
  console.log(true);
}

//Window e Document - são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

const selectH1 = document.querySelector("h1");
const selectedClasses = selectH1.classList;
console.log(selectH1);

function callbackh1() {
  console.log(`Clicou em ${selectH1.innerText}`);
}

selectH1.addEventListener("click", callbackh1);

//EXERCICIOS
// Retorne o url da página atual utilizando o objeto window
let currentUrl = window.location.href;
console.log(currentUrl);

// Seleciona o primeiro elemento da página que possua a classe ativo
let selectClass = document.getElementsByClassName("ativo");
console.log(selectClass);

// Retorne a linguagem do navegador
let navigatorLanguage = window.navigator.language;
console.log(navigatorLanguage);

// Retorne a largura da janela
let windowHeight = window.innerHeight;
console.log(windowHeight);
