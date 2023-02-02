const name = prompt("Enter your name: ");
let cidades = " "
let totCidades = 0
let question = prompt("Você visitou alguma cidade? [Sim/Não]").toUpperCase()[0]
while (question === "S") {
    let city = prompt("Qual o nome da cidade visitada: ")
    cidades += `- ${city}\n`
    totCidades++

    question = prompt("Você visitou alguma outra cidade? [Sim/Não]").toLocaleUpperCase()[0]
}

alert(`Nome: ${name}\nTotal de Cidades: ${totCidades}\nCidade visitadas:\n${cidades}`)