// toLowerCase and toUpperCase

var frase = "Esta é a frase que vamos manipular"

console.log(frase.toLocaleLowerCase())
console.log(frase.toLocaleUpperCase())

// trim

var nome = "           Gabriel            "
console.log(nome)
console.log(nome.trim()) // remove os espaços

// split

console.log(frase.split(" "))

var tags = "PHP, JS, HTML, CSS"

console.log(tags.split(', '))

// lastIndexOf

var fraseDois = 'Eu quero a última palavra teste desta frase teste'

console.log(fraseDois.lastIndexOf('teste'))