const atacante = prompt("Insira o nome do atacante: ")
const ataque = prompt("Poder de ataque: ")

const defensor = prompt("Nome do defensor: ")
let pontosDeVida = prompt("Quantidade de pontos de vida do defensor: ")
const poderDeDefesa = prompt("Poder de defesa: ")
const possuiEscudo = prompt("Possui escudo: [Sim/Não]")

let danosCausado = 0

if (ataque > poderDeDefesa && possuiEscudo === "Não") {
    danosCausado = ataque - poderDeDefesa
} else if (ataque > poderDeDefesa && possuiEscudo === "Sim") {
    danosCausado = (ataque - poderDeDefesa) / 2
}

pontosDeVida -= danosCausado

alert(`${atacante} causou ${danosCausado} pontos de danos no defensor`)
alert (`Dados dos personagens \n Atacante:\n
Nome: ${atacante}\n Poder de Ataque: ${ataque}\n Defensor: \n
Nome: ${defensor}\n Poder de Defesa: ${poderDeDefesa}\n Possui escudo: ${possuiEscudo}\n Pontos de Vida: ${pontosDeVida - danosCausado}`)