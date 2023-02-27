// retornar a soma de um array de números

// O que possuimos
const numeros = [2, 4, 2, 4, 7]

// O que eu espero? 17
const total = numeros.reduce(function(accumulador, currentNumber) {
    return accumulador + currentNumber
})

console.log(total)

/*
    Carrinho de compras
    retorna o total a pagar
*/

// O que eu tenho?
const itens = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase', quantity: 2, price: 6}
]

// O que eu espero? 25

const totPay = itens.reduce(function(accumulador, preço) {
    return accumulador + preço.price * preço.quantity
}, 0)

console.log(totPay)

/*
    contador de names por iniciais
*/

// O que eu tenho?
const names = ["Daniel", "Maria", "Juca", "Marta", "João", "Jéssica"]

// O que eu espero? namesCount = {d: 1, m: 2, j: 3}

const namesCount = names.reduce(function(count, nameCurrent) {
    const firstLetter = nameCurrent[0].toLocaleLowerCase()
    if (count[firstLetter]) {
        count[firstLetter] ++
    } else {
        count[firstLetter] = 1
    }

    return count
}, {})

console.log(namesCount)

const people = [
    {name: "Daniel", age: 28},
    {name: "Maria", age: 29},
    {name: "Marta", age: 29}
]