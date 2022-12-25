// Tudo no JS é "objeto" | Métodos

let pessoa = {
    nome: 'João',
    idade: 21,
    sexo: 'M',
    falar: function () {    // Criação de um método
        console.log('Hello, Wold')
    },

    soma: function(a, b) {
        return a + b
    }
};

console.log(pessoa.nome); // Acessando propiedades

pessoa.falar(); // Usando métodos do objeto

var s = pessoa.soma(3, 7);
console.log(s)