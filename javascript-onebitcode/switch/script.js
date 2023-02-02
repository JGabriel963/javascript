const resultado = prompt("Escolha uma alternativa:\n1)\n2)\n3)")

const resNumber = parseFloat(resultado)

switch (resNumber) {
    case 1:
        alert("O resultado foi '1")
        break
    case 2:
        alert("O resultado foi '2'")
    case 3:
        alert("O resultado foi '3'")
        break
    default:
        alert("Nenhuma das opções...")
}