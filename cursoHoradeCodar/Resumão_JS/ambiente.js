console.log("Hello, World of the JavaScript");

// console
console.error("Este é um erro!")
console.warn("Esta é um aviso!")
console.log("Esta é uma mensagem!")

// Variáveis
var x = 10
// variáveis mais modernas
let y = 15
const z = 20

if (true) {
    let y = 55
    console.log(`'${y}' da variável let y em escopo local`)
}

y = 16
// z = 4 não é possível mudar o valor de const z em escopo global

console.log(x)
console.log(y)
console.log(z)

// Tipos de dados
const name = "Gabriel"
console.log(name)
console.log(`${name} é uma ${typeof name}`)

const num = 4
console.log(num)
console.log(`${num} é uma ${typeof num}`)

const num1 = 12.5
console.log(num1)
console.log(`${num1} é um ${typeof num1}`)

const isAproved = false // true or false
console.log(isAproved)
console.log(`${isAproved} é um ${typeof isAproved}`)

let surname = null
console.log(surname)
console.log(`${surname} é um ${typeof surname}`)

let age
console.log(age)
console.log(`${age} é um ${typeof age}`)

const languages = ["JavaScript", "PHP", "Phyton",] // Array
console.log(languages)
console.log(`${languages} é uma ${typeof languages}`)

const user = {email: "joaogabriel9633@gmail.com",
usuario: "João Gabriel",
idade: 20,
sexo: "M"}

console.log(user)
console.log(`${user} é uma ${typeof user}`)

console.log(user.usuario)


// Métodos Strings
const fullName = "João Gabriel da Conceição Oliveira"
console.log(fullName.length)

console.log(fullName.split(" "))
console.log(fullName.toLocaleLowerCase())
console.log(fullName.toLocaleUpperCase())
console.log(fullName.indexOf("G"))
console.log(fullName.slice(5, 12))

// Métodos de Array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'
console.log(list)

console.log(list[list.length - 1]) // último elemento do array

list.push('g') // adiciona dados no fim da lista
console.log(list)

list.pop() // retira dados do fim da lista
console.log(list)

list.shift() // elimina dados ao início da lista
console.log(list)

list.unshift('a') // adiciona dados ao início da lista
console.log(list)