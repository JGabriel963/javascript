for (let i = 10; i > 0; i--) {
    console.log(i)
    if(i === 5) {
        break;
    }
}

console.log('Deu break')

console.log('------------')

var x = 0;

while (x < 100) {
    x += 10
    console.log(x)
    if (x === 50) {
        console.log('CONTINUE')
        continue;
    }
}

console.log('Testando o continue')