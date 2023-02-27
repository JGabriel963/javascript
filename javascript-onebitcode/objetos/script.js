const arr = []
const cad = {
    name: "João",
    age: "21",
    height: 1.76,
    profession: "Web Develop"
}

arr.push(cad)

console.log(arr)
console.log(arr[0].name)
console.log(arr[0].profession)

const array = [
    ["l1, c1", "l1, c2", "l1, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"]
]
let matriz = ""
for (let i = 0; i < array.length; i ++) {
    for (let c = 0; c < array[0].length; c ++) {
        matriz += `${array[i][c]}\n`
    }
}

console.log(matriz)