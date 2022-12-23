function linha() {
    return console.log('----------------')
}

linha()

function primeiraFuncao() {

    console.log("Hello World das funções");

}

primeiraFuncao();
linha()

function dizerNome(n) {
    return console.log(`O nome é: ${n}`)
}

dizerNome('João')
dizerNome('Pedro')
dizerNome('Miguel')

linha()

var name = 'John'

dizerNome(name)

linha()

function soma(a, b) {
    return a + b
}

var s = soma(2, 6)

console.log(s)

console.log(soma(8, 10))