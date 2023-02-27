function somarPares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            soma += array[i]
        }
    }

    return soma
}

const arr = [4, 7, 8, 10, 3, 1, 9, 5]
console.log(somarPares(arr));