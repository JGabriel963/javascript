function maiorQue(array, x) {
    let maiores = []
    for (let m = 0; m < array.length; m++) {
        if (array[m] > x) {
            maiores.push(array[m])
        }
    }

    return maiores.sort()
}

const arr = [4,8,9,3,2,1,5,6,7]
console.log(maiorQue(arr, 5))