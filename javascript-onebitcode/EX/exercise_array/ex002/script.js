let cartas = []
let option = ""

do {
    let baralho = ""
    for (let i= 0; i < cartas.length; i ++) {
        baralho += `${i + 1} - ${cartas[i]}\n`
    }

    option = prompt("Cartas:\n" +
    `${baralho}\n` + 
    "Escolha uma opção:\n1 - Adicionar uma nova carta\n2 - Puxar uma carta\n3 - Sair")

    switch (option) {
        case "1":
            const addCard = prompt("Nome da nova carta:")
            cartas.unshift(addCard)
            break
        case "2":
            if (cartas.length == 0) {
                alert("Não há cartas a serem puxadas.")
            } else {
                const pushCard = cartas.shift()
                alert(`Carta "${pushCard}" foi puxada`)
            }
            break
        case "3":
            alert("Fim do progama...")
            break
        default:
            alert("Opção Inválida...")
    }
} while (option != "3")
