var teste = 5;

console.log(this.teste)
console.log(teste)


let pessoa = {
    nome: 'João',
    idade: 21,
    sexo: 'M',
    falar: function () {    // Criação de um método
        console.log('Hello, Wold')
    },
    dizerNome: function () {
        console.log(`Olá, tudo bem ${this.nome}`); // O this se refere a esta istância dentro do objeto | vai exibir
    },

    aniversario: function() {
        this.idade += 1; // Mudar o valor idade que está dentro do objeto.
    },

    saudacao: function() {
        return `Mr. ${this. nome}`
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao())

