const arr = ["Rice", "Beans", "Eggs", "Vegetables", "Orange"]
console.log(arr)

// Adicionar Elementos
// push - adicionar no final
arr.push("Coffee")
console.log(arr)

//unshift - adicionar no inicio
arr.unshift("Coffee")
console.log(arr)

// Remover elementos
// pop - remover no inicio
let ultimoElement = arr.pop()
console.log(arr)
console.log(ultimoElement)

// shift - remover primeiro elemento
ultimoElement = arr.shift()
console.log(arr)
console.log(ultimoElement)

// Pesquisar por um Elemento
// includes - return true or false if the element is on arrays
const inclui = arr.includes("Rodolfo")
console.log(inclui)

// indexOf - Onforam o indice do valor requisitado por parâmetro
const indice = arr.indexOf("Orange")
console.log(indice)

// Cortar e Concatenar
// slice - Cortar array 
const bestDishes = arr.slice(0, 3)
const outros = arr.slice(-3)
console.log(arr)
console.log(bestDishes)
console.log(outros)

// concat - concatenar
const sociedade = bestDishes.concat(outros, "Luch")
 console.log(sociedade)

 // Substituição dos Elementos
 // splice - remove e insere elemento
 const elementosRemovidos = sociedade.splice(indice, 1, "Breakfast") // indice de onde começar a ser removido, quantos elementos apartir do indice, dado que ira substituir
 console.log(sociedade)
 console.log(elementosRemovidos)

 // Interar sobre Elementos
 for (let i = 0; i < sociedade.length; i ++) {
    const element = sociedade[i]
    console.log(`${element} se econtra na posição ${i}`)
 }