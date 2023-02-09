// Resolução do professor
let fila = []
let option = " "

do {
    let paciente = " "
    for (let i = 0; i < fila.length; i++) {
        paciente += `${i + 1}º - ${fila[i]}\n`
    }

    option = prompt("Pacientes:\n" +
    `${paciente}\n` + 
    "Escolha um opção:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair")

    switch (option) {
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente:")
            fila.push(novoPaciente)
            break
        case "2":
            if (fila.length === 0) {
                alert("Não há clientes a serem consultados.")
            } else {
                const pacienteConsultado = fila.shift()
                alert(`Paciente "${pacienteConsultado}" foi consultado`)
            }
            break
        case "3":
            alert("Fim do progama...")
            break
        default:
            alert("Opção Inválida")
    }

} while (option != "3")