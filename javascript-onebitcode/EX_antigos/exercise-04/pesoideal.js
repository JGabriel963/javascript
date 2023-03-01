function pesoIdeal(s, h) {
    if (s === "1") {
        return (72.7 * h) - 58
    } else {
        return (62.1 * h) - 44.7
    }
}

function main() {
    while (true) {
        const altura = prompt("Informe sua altura:")
        const sexo = prompt("Qual o seu sexo? 1 - masculino 2 - femenino")
        if (sexo !== "1" || sexo !== "2") {
            alert("Opção Inválida. Tente novamente.")
        } else {
            alert(`Seu peso ideal é ${pesoIdeal(altura)}`)
        break
        }  
    }
}

main()