function media(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    const media = soma / array.length

    return media
}

const arr = [5, 5, 6]
console.log(media(arr).toFixed(2))

