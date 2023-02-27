// function somar(a, b) {
//     return a + b
// }

// const operacao = somar

// console.log(operacao(4, 5))

// const subtrair = function (a, b) {
//     return a - b
// }

// console.log(subtrair(63, 10))

// Perigos da função anônima
// olaMundo()
// oiMundo() // --> ERROR

// function olaMundo() {
//     console.log("Olá, Mundo")
// }

// let oiMundo = function() {
//     console.log("Oi, Mundo!")
// }

function soma(x, y) {
    return x + y
}

const operacao  = soma

console.log(operacao(7,7))

const subtrair = function(a, b) {
    return a - b
}

console.log(subtrair(53, 10))