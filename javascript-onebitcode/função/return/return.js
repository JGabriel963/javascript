function calcularMedia(a, b) {
    const media = (a + b) / 2

    return media
}

const resultado = calcularMedia(20, 10) 
console.log(resultado)

function createProduct(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }

    return produto
}

const notebook = createProduct("Notebook Itel Core i3", 2500)

console.log(notebook)

function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangulo(lado, lado)
}

console.log(areaRetangulo(3, 5))

console.log(areaQuadrada(9))

function maiorIdade(idade) {
    if (idade >= 18) {
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}

console.log(maiorIdade(23))
console.log(maiorIdade(13))