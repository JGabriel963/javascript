const word = prompt("Digite uma palavra: ")
let inverteddWord = ""
for (let i = word.length - 1; i >= 0; i--) {
    inverteddWord += word[i]
}

if (word === inverteddWord) {
    alert(`Palavra: ${word}\nInversão: ${inverteddWord}\nÉ Palímdromo!`)
} else {
    alert(`Palavra: ${word}\nInversão: ${inverteddWord}\nNão é Palímdromo!`)
}