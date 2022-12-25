// DOM - Document Object Model;
// tag
let titulo = window.document.getElementsByTagName('h1')[0];

titulo.innerHTML = 'Hello, Wold!'

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis)
console.log(lis[2])

// id
var paragrafo = document.getElementById('paragrafo')

console.log(paragrafo);

// class
var itemDaLista = document.getElementsByClassName('item');

console.log(itemDaLista)


