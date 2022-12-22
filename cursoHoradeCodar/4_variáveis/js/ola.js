var name = window.prompt('Digite seu nome: ')

let n = document.createElement('h1')
n.innerText = `Olá, ${name}`
const nome = document.querySelector('div#nome')
nome.appendChild(n)

var corpo = document.querySelector('body')

corpo.style.background = 'blue'

n.style.color = '#fff'





