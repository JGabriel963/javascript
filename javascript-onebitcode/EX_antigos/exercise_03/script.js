function velNave(x) {
    if (x < 0) {
        alert("Nave está parada. Considere partir e aumentar a velocidade")
    } else if (x < 40) {
        alert("Você está devagar, podemos aumentar mais")
    } else if (x >= 40 && x < 80) {
        alert("Uma boa velocidade para manter")
    } else if (x >= 80 && x < 100) {
        alert("Velocidade alta. Considere diminuir")
    } else {
        alert("Velocidade perigosa. Controle automático forçado")
    }
}

function main() {
    const nomePiloto = prompt('Informe o nome do piloto:')
    const vel = parseFloat(prompt("Velocidade Inicial: 0\n" +
    "A que velocidade você deseja acelerar?"))
    const confirmar = confirm(`Deseja confirmar que a nave irá acelerar ${vel} km/s?`)

    if (confirmar) {
        velNave(vel)
    } else {
        alert("Saindo do Progama. Atualize a página caso queira tentar novamente!")
    }

    alert(
        `Nome do Piloto: ${nomePiloto}\n` +
        `Velocidade atual: ${vel}` 
    )

    alert("Atualize a págine e teste novamente.")
}

main()