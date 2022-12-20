let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
/*
Minha solução sem assistir a aula
let maior = 0
let menor = 0
let soma = 0
let c = 0
*/

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else{
        false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        /*soma += Number(num.value)
        c++*/
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        /*
        Minha solução sem assistir a aula
        if (c == 1) {
            menor = Number(num.value)
            maior = Number(num.value)
        } else if (maior < num.value){
            maior = num.value
        } else if (menor > num.value) {
            menor = num.value
        }*/
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        // Resolução do Professor
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados`
        res.innerHTML += `<br>O maior valor informado foi ${maior}`
        res.innerHTML += `<br>O menor valor informado foi ${menor}`
        res.innerHTML += `<br> A soma de todos os valores é ${soma}`
        res.innerHTML += `<br>A média dos valores é ${soma / valores.length}`

    }
}