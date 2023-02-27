let numeros = ""
for (let c = 1; c < 101; c ++) {
    if (c % 3 === 0 && c % 5 === 0) {
        numeros += "FizzBuzz\n"
    } else if (c % 5 === 0) {
        numeros += "Buzz\n"
    } else if (c % 3 === 0) {
        numeros += "Fizz\n"
    } else {
        numeros += `${c}\n`
    }
}

console.log(numeros)