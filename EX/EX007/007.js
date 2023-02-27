function divisores(numero) {
    const divisores = []
    for (let c = 0; c <= numero; c++) {
        if (numero % c == 0) {
            divisores.push(c)
        }
    }

    return divisores
}

const num = 20
console.log(divisores(num))
