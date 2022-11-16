/*exercicios extras

let pratoDoDia = document.querySelector(".prato-do-dia");
let salada = pratoDoDia.querySelector(".salada").textContent;
let principal = pratoDoDia.querySelector(".principal").textContent;
let acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;
var taxa = 0;

taxa = vendas / (clientesAbordados * mediaTentativasPorCliente);
console.log(taxa);

console.log("Prato do dia:", salada, principal, acompanhamento);
*/

let title = document.querySelector(".js-title");
title.textContent = "Nutritionist";

let paciente = document.querySelector("#first-patient");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let pesoEhValido = true;
let alturaEhValida = true;

tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 1000) {
  console.log("peso inválido!");
  pesoEhValido = false;
  tdPeso.textContent = "peso inválido";
}

if (altura <= 0 || altura >= 3.0) {
  console.log("altura inválida!");
  alturaEhValida = false;
  tdAltura.textContent = "altura inválida";
}

if (pesoEhValido && alturaEhValida) {
  let imc = peso / (altura * altura);
  tdImc.textContent = imc;
} else {
  tdImc.textContent = "Altura e/ou peso inválido!";
}
