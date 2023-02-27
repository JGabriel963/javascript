// function calcular(a, b, operacao) {
//     console.log("Realizando uma operação.")
//     const resultado = operacao(a, b)
//     return resultado
// }

// function somar(x, y) {
//     console.log("Realizando uma soma!")
//     return x + y
// }

// console.log(calcular(3, 5, somar))

// console.log(calcular(8, 4, function(x, y) {
//     console.log("Realizando uma subtração.")
//     return x - y
// }))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const list = ["Beans", "Rice", "Orange", "Eggs"];

for (let i = 0; i < list.length; i++) {
     exibirElemento(list[i], i, list)
}

list.forEach(exibirElemento)

// também pode ser feito de outra forma
list.forEach(function(element, index, array) {
    console.log({
        element,
        index,
        array
    })
})
