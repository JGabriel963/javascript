let option = " "

do {
    option = prompt("*Menu*\n1)\n2)\n3)\n4)\n5) Encerrar")
    switch (option) {
        case "1":
            alert("Opção 1")
            break
        case "2":
            alert("Opção 2")
            break
        case "3":
            alert("Opção 3")
        case "4":
            alert("Opção 4")
            break
        case "5":
            alert("Encerrando progama...")
            break
        default:
            alert("Opção inválida")
    }
} while(option !== "5")

alert("Progama encerrado!")