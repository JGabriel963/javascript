function index(arr, n) {
    const position = arr.indexOf(n)

    return position
}

const array = [2, 9, 6, 4]
const num = 6
console.log(`O número ${num} está na posição ${index(array, num)} do Array.`)