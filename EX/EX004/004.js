function impaOrPar(n) {
    if (n % 2 == 0) {
        console.log(`O número ${n} é PAR!`)
    } else {
        console.log(`O número ${n} é IMPAR!`)
    }
}

function main() {
    num = 4
    impaOrPar(num)
}

main()