const people = []

function maisVelho() {
    const person1 = people[0]
    const person2 = people[1]

    return alert(
        "Pessoa mais velha:\n" +
        `Mais velho: ${person1.name}\n` +
        `Nome: ${person1.age}\n` +
        "Pessoa mais nova:\n" +
        `Nome: ${person2.name}\n` +
        `Idade: ${person2.age}\n` +
        `Diferença de idade: ${person1.age - person2.age}`
    )

}

function main() {
    for (let i = 0; i < 2; i++) {
        let pessoas = {}
        if (i === 0) {
            pessoas.name = prompt(`Informe o nome da pessoa mais velha:`)
        } else {
            pessoas.name = prompt(`Informe o nome da pessoa mais nova:`)
        }
        pessoas.age = parseFloat(prompt("Informe a idade:"))
        people.push(pessoas)
    }

    maisVelho()
}

main()