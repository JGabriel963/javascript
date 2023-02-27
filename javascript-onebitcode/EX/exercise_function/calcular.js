function areaTriangulo() {
    const base = parseFloat(prompt("Digite a base do triângulo: "))
    const altura = parseFloat(prompt("Digite a altura do triângulo: "))

    return alert(`A área do triangulo é igual a ${(base * altura) / 2}`)
}

function areaRetangulo() {
    const base = parseFloat(prompt("Digite a base do Retângulo: "))
    const altura = parseFloat(prompt("Digite a altura do Retângulo: "))

    return alert(`A área do retângulo é igual a ${base * altura}`)
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Digite a medida de um dos lados do quadrado: "))

    return alert(`A área do quadrado é igual a ${lado ** 2}`)
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a medida da base maior do Trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a medida da base menor do Trapézio:"))
    const altura = parseFloat(prompt("Digite o tamanho da altura do Trapézio: "))
    
    return alert(`A área do Trapézio é igual a ${((baseMaior + baseMenor) * altura) / 2}`)
}

function areaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do circulo: "))
    const PI = 3.14

    return alert(`A área do circulo é igual a ${PI * (raio ** 2)}`)
}

function exibirMenu() {
    return prompt(`Calculadora Geométrica\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado: lado²\n4 - Área do trapézio\n5 - Área do circulo\n6 - Sair`)
}

function executar() {
    let option = ""
    do {
        option = exibirMenu()

        switch (option) {
            case "1":
                areaTriangulo()
            break
            case "2":
                areaRetangulo()
            break
            case "3":
                areaQuadrado()
            break
            case "4":
                areaTrapezio()
            break
            case "5":
                areaCirculo()
            break
            case "6":
                alert("Fim do progama...")
            break
            default:
                alert("Opção inválida! Tente novamente")
        }
    } while (option !== "6")
}

executar()