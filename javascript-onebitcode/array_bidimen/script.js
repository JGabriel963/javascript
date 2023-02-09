const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]

console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[1][2])
console.log(arr[2])
console.log(arr[2][0])
console.log(arr[2][1])
console.log(arr[3])

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],//0,0 - 0,1 ...
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],//1,0 - 0,2 ...
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],//2,0 - 2,1 ...
  ]
console.table(matriz)

// matriz.push(["Nova linha"])
// matriz[0].push("Nova coluna")

// console.table(matriz)

// Interação elementos
for (let i = 0; i < matriz.length; i ++) {
    for (let c = 0; c < matriz[i].length; c ++) {
        const element = matriz[i][c]
        console.log(`Posição: ("${i}","${c}") Valor: ${element}`)
    }
}


