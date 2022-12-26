// criar elemento
var el = document.createElement('div')

// adicionando classe ao elemento criado
el.classList = "div-criada";

console.log(el);

var container = document.querySelector('#container')

console.log(container)
// inserindo elemento filho
container.appendChild(el)

// insertBefore -> inserir antes de um elemento

var el2 = document.createElement('div')
el2.classList = "div-before";

// referência para inserir antes
var el3 = document.querySelector('#container .div-criada');

console.log(el3);

// dois parâmetros: o elemento criado e a referência para inserir antes.
container.insertBefore(el2, el3);