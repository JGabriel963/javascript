function tabuada(num) {
    let tabuada = ""
    for (let c = 0; c < 10; c ++) {
        tabuada += `${num} x ${c + 1} = ${num * (c +1)}\n`
    }

    return tabuada
}

const valor = 5
console.log(tabuada(valor))