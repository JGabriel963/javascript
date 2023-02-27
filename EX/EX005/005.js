function arrPar(array) {
    const pares = []
    for (let i = 0; i < array.length; i ++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        }
    }

    console.log(pares.sort())
}


const arr = [4, 7, 3, 8, 6, 5]
arrPar(arr)