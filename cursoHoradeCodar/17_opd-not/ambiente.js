// NOT => inverte os valores bool 
// true vira false
if (!true) {
    console.log('OK');
}
//false vira true
if (!false) {
    console.log('OK');
}

var nome = 'Pedro';

if (!(nome == 'João')) {
    console.log(`Olá, ${nome}`)
} else {
    console.log('What your name?')
}