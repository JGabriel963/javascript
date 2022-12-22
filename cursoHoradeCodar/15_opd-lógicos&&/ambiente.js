// And => && |
var idade = 1;
var nome = 'João';
//True quando as duas declarações forem verdadeiras
if (nome == 'João' && idade >= 16) {
    console.log('Pode fazer aula de esgrima')
} else {
    console.log('Não pode fazer aula de esgrima')
}

console.log('---------------')

// Quando uma das declarações não forem verdadeiras, o retorno será false
if (nome == 'João' && idade < 18) {
    console.log('Não pode dirigir')
} else {
    console.log('Pode dirigir')
}