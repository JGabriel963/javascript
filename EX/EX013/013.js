function reverter(string) {
    let palavraInvertida = []
    for (let i= 0; i < string.length; i ++) {
        palavraInvertida.unshift(string[i])     
    }

    const juntar = palavraInvertida.join("")

    return juntar
}

console.log(reverter("Gabriel"))