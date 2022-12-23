let x = 5; // var x = 5;

x = 12;

const y = 10; // Não vai mudar seu valor

console.log(y)
console.log(x);

// y = 20; => Não é possível mudar a const

// Escopo local não muda o valor do let
if (true) {
    let x =20;

    console.log(x);

    const y = 50;

    console.log(y)
}

console.log(x)



