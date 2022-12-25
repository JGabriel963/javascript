// criando elemento "p"
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);
// Testo são considerados nós de arvore
var texto = document.createTextNode("Este é o conteúdo do parágrafo criado atraves do JS");

// Adicionando texto no elemento "p" criado
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// Selecionado o "body" do documento HTML
var body = document.querySelector('body');

console.log(body);

// adicionando elemento "p" no body
body.appendChild(novoParagrafo);

// inserir em um container
var container = document.querySelector('div#container');
console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode('Texto do span criado no JS.'));

container.appendChild(el);

