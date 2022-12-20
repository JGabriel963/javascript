let valores = [3, 5, 9, 1, 6 , 8, 2, 4]
/*
for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
