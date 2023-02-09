let option = "0"
let capitalInicial = parseFloat(prompt("Quantidade de dinheiro disponível:"))

do {
    option = prompt(`Capital inicial: ${capitalInicial}\n\n1 - Adicionar(+)\n2 - Remover(-)\n3 - Sair\nDigite sua opção:`)
    switch (option) {
        case "1":
            capitalInicial += parseFloat(prompt("Informe o valor que será adicionado:"))
            break
        case "2":
            capitalInicial -= parseFloat(prompt("Informe o valor que será adicionado:"))
            break
        case "3":
            alert("Saindo do progama...")
            break
        default:
            alert("Opção Inválida!")
    }
} while(option !== "3")

alert(`Progama encerrado\nValor restante: ${capitalInicial}`)