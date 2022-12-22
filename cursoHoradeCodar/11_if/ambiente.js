idade = 15;
console.log(`Idade ${idade}`)
console.log('Antes do "if"')

if (idade >= 18) {
    console.log('Idade apropriada para fazer a carteira de habilitação.')
}

if (idade >= 15 && idade < 18) {
    console.log('Precisa esperar mais 3 anos.')
}

console.log('Depois do "if"')