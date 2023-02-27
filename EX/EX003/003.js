function mairoNumero(lista) {
    alert(`Números: ${lista}`)
    let c = 0
    for (let i = 0; i < lista.length; i ++) {
        c += lista[i]
    }

    return alert(`A soma de todos o números é ${c}`)
}

function executar(op) {
    const listOfNumbers = []
    switch (op) {
        case "1":
            let option = ""
            listOfNumbers.length
            do {
                let num = parseFloat(prompt("Digite um número: "))
                listOfNumbers.push(num)
                option = prompt("Quer adicionar mais? [S/N]")[0].toUpperCase()
            } while (option !== "N")
            mairoNumero(listOfNumbers)
            break
        case "2":
            alert("Fim do progama!")
            break
        default:
            alert("Opção iválida! Tente novamente!")
    }
}

function main() {
    const listOfNumbers = []
    let option = ""
    do {
        option = prompt(`1- Adicionar números ao array\n2- Sair`)
        executar(option)
    } while (option !== "2")
}

main()