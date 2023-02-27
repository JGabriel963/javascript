const vagas = []
function listarVagas() {
    const vagasEmTexto  = vagas.reduce(function(textoFinal, vagas, indice) {
        textoFinal += indice + ". "
        textoFinal += vagas.nome
        textoFinal += " (" + vagas.candidatos.length + "candidatos)\n"

        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

 function createVaga() {
     const nome = prompt("Infome um nome para a vaga:")
     const description = prompt("Infome uma descrição para a vaga:")
     const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

     const confirmar = confirm("Deseja confirmar tais informações?\n" +
     `Nome: ${nome}\n` +
     `Descrição: ${description}\n` +
     `Data limite: ${dataLimite}`)

     if (confirmar) {
        const novaVaga = {nome, description, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada!")
     }
}

function visualizarVaga() {
    const indice = prompt("Digite o inidice da vaga que deseja exibir:")
    if (indice >= vagas.length || indice < 0) {
        alert("Indice inválido")
        return 
    }
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        `Vagas nº ${indice}\n` +
        `Nome: ${vaga.nome}\n` +
        `Descrição: ${vaga.description}\n` +
        `Data Limite: ${vaga.candidatos}\n` +
        `Quantidade de Candidatos: ${vaga.candidatos.length}\n` +
        `Candidatos Inscritos: ${candidatosEmTexto}`
    )
}

 function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato: ")
    const indice = prompt("Informe o indice da vaga para o qual o candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmar = confirm("Deseja confirma candidato " + candidato + " para esta vaga:" + 
    `Nome: ${vaga.nome}\n` +
    `Descrição: ${vaga.description}\n` +
    `Data Limite: ${vaga.dataLimite}`) 

    if (confirmar) {
        vaga.candidatos.push(candidato)
        alert("Incrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmar = confirm(
        `Tem certeza que deseja excluir a vaga ${indice}?\n` +
        `Nome: ${vaga.nome}\n` +
        `Descrição: ${vaga.description}\n` +
        `Data Limite: ${vaga.dataLimite}`
    )

    if (confirmar) {
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

 function exibirMenu() {
    return prompt("Vagas de Emprego:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar uma nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair")
}

function executar() {
    const vagas = []
    let option = ""
    do {
        option = exibirMenu()

        switch (option) {
            case "1":
                listarVagas()
                break
            case "2":
                createVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Fim do Progama...")
                break
            default:
                alert("Opção inválida. Tente novamente.")
        }


    } while (option !== "6")
}

executar()