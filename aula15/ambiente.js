let num = [5, 8, 2, 9, 3]

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} e o último é ${num[4]}`)
num.sort()
console.log(num)
num.push(4)
num.sort()
console.log(num)
/*
Tentado reproduzir o que vi na aula
for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}
*/

let pos = num.indexOf(9)
console.log(pos)
