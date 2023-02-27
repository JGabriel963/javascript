function maiorNumero(n1, n2) {
    let maior = n1
    if (n2 > n1) {
        maior = n2
    } else if (n1 === n2) {
        console.log("Ambos os números são iguais!")
    }

    return maior
}

const num1 = 9
const num2 = 9
console.log(maiorNumero(num1, num2))