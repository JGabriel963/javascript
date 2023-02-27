function contarVogais(string) {
    const vogais = "AEIOU"
    let cont = 0;

    for (let i = 0; i < string.length; i ++) {
        if (vogais.includes(string[i].toUpperCase())) {
            cont++
        }
    }

    return cont
}

const minhaString = "Arara";
console.log(contarVogais(minhaString));