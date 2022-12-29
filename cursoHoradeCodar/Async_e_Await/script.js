// sintaxe
function primeiraFunção() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 5000)
    })

}

async function segundaFunção() {

    console.log("Iniciou")

    await primeiraFunção()

    console.log("Terminou")

}


segundaFunção();