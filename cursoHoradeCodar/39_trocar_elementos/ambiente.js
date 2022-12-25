// criar elemento
var el = document.createElement('h3');
el.classList = 'testando-classe';

el.appendChild(document.createTextNode('Este é o texto do h3'));

console.log(el);

// Selecionar elemento que deseja trocar
var title = document.getElementById('title');

console.log(title);

// Selecionar o pai do elemento
var pai = title.parentNode;

// Trocar os elementos
pai.replaceChild(el, title);
