function ordemAlfabetica(string) {
    const separar = string.split("")
    const ordenar = separar.sort()
    const juntar = ordenar.join("")

    console.log(juntar)
}


const minhaString = "rodolfo"
ordemAlfabetica(minhaString)