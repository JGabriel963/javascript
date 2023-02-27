function exibirInfo(name, age) {
    return alert(
        `Seu nome é ${name}.\n` +
        `Você tem ${age} anos de idade.`
    )
}


function main() {
    alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

    const name = prompt("Enter your name:")
    const age = prompt("Enter your age:")
    const confirmar = confirm("Deseja confirmar esta idade?\n" +
    `Idade: ${age}`)

    if (confirmar) {
        exibirInfo(name, age)
    } else {
        main()
    }
}

main()