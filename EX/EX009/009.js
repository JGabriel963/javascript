function contarCaracteres(lista) {
    const qtdCaracteres = []
    for (let c = 0; c < lista.length; c ++) {
        qtdCaracteres.push(lista[c].length)
    }

    return qtdCaracteres
}

const minhaLista = ["João", "Gabriel", "da", "Conceição", "Oliveira"]
console.log(contarCaracteres(minhaLista))