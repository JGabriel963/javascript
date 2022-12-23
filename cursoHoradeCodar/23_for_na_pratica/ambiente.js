var lista = ['Laranja', 'Maça', 'Pera', 'Limão', 'Melancia']

var listaul = document.createElement('ul')

var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listaul);

var listaBody = document.getElementsByTagName('ul')

// console.log(listaBody[0]);
for (var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textli = document.createTextNode(lista[i]);

    liFor.appendChild(textli);

    listaBody[0].appendChild(liFor)
}

