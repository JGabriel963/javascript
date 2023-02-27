function mairoNumero(x, y) {
    if (x > y) {
        alert(`O maior número é ${x}`)
    } else if(y > x) {
        alert(`O maior número é ${y}`)
    } else {
        alert(`Ambos são iguais!`)
    }
}

function main() {
    const n1 = parseFloat(prompt("Digite um número: "))
    const n2 = parseFloat(prompt("Digite outro número: "))

    mairoNumero(n1, n2)
}

main()