'use strict';

const display = document.getElementById("display")
const numero = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero;
let operador;
let numeroAnterior;

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numero.forEach(numero => numero.addEventListener("click", inserirNumero));

const selecionarOperador = () => {
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = display.textContent;
}

operadores.forEach(operadores => operadores.addEventListener("click", selecionarOperador));