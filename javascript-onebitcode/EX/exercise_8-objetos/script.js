const moveis = []
let option = ''
do {
    option = prompt("Bem vindo(a) ao Cadastro de Imóveis!\n" + 
    "Total de imóveis: " + moveis.length +
    "\n1 - Salvar imóvel\n2 - Ver imóveis salvos\n3 - Sair")
    switch (option) {
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Enter your name: ")
            imovel.bedroom = parseFloat(prompt("Quantidade de quartos: "))
            imovel.banheiro = parseFloat(prompt("Quantidade de banheiros: "))
            imovel.garagem = prompt("Possui garagem: [Sim/Não]")

            const confirma = confirm("Salvar este imóvel?\n" + 
                `\nProprietário: ${imovel.proprietario}` + 
                `\nQuartos: ${imovel.bedroom}\nBanheiros: ${imovel.banheiro}\nPossui garagem? ${imovel.garagem}`
            )

            if (confirma) {
                moveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < moveis.length; i ++) {
                alert(
                    `Imovel ${i + 1}:` +
                    `\nProprietário: ${moveis[i].proprietario}` +
                    `\nQuartos: ${moveis[i].bedroom}` +
                    `\nBanheiros: ${moveis[i].banheiro}` +
                    `\nPossui garagem? ${moveis[i].garagem}`
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida. Tente novamente!")
            break
    }
} while (option !== "3")