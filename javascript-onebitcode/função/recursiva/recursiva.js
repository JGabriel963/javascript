// function dividir(num) {
//     console.log(num)
//     if (num % 2 == 0) {
//         dividir(num / 2)// A funcão é chamada novamente
//     } else {
//         return num
//     }
// } 

function dividir(n) {
    console.log(n)
    if (n % 2 === 0) {
        dividir(n /2)
    } else {
        return n
    }
}

dividir(220)

// dividir(20)

function contagem(num) {
    console.log(num)
    if (num < 100) {
        contagem(num + 2)
    } else {
        console.log("Fim da função recursiva!")
    }
}

function fatorial(num) {
    console.log(`Número: ${num}`)
    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(`${num} x !${num - 1}`)
        return num * fatorial(num -1)
    }

    
}

console.log(fatorial(5))
