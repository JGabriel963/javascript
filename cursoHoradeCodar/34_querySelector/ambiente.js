var itensClasse = document.getElementsByClassName('item')

console.log(itensClasse);

// querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li')

console.log(itensQuery)

var intensQuery2 = document.querySelectorAll('#lista .item')

console.log(intensQuery2)

// querySelector - pega somente o primeiro elemento encontrado, normalmente não é muito recomendável.
var lista = document.querySelector('#lista')

console.log(lista)

var primeiraLista = document.querySelector('ul')

console.log(primeiraLista)

/*
DICA! Se quiser pegar somente um elemento, use o querySelector.
Caso deseja mais de um elemento, opine pelo querySelectorAll
*/