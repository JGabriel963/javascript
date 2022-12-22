// Or => ||

var idade = 12;
var nome = 'João';

// Basta uma das declarações estarem certas para que o resultado seja "true"
if (nome = 'João' || idade > 14) {
    console.log('Pode fazer as aulas de esgrima.');
} else {
    console.log('Não pode entrar');
}

console.log('-------------');

/*
if (nome == 'Pedro' && 15 > 20 || 10 == 10) {
    console.log("testando...");
}
r => true | testando...
*/

if ((nome == 'Pedro' || 15 > 20 ) && 10 == 10) {
    console.log("testando...");
} else {
    console.log('não entrou...')
}
