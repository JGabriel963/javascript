// splice - adiconar ou remover elementos de qualquer posição

var arr = [1, 2, 3, 4, 5];
console.log(arr)
arr.splice(2, 0, 999);
console.log(arr);

arr.splice(4, 1); // Também é possível eliminar elementos
console.log(arr);

// indexOf - encontrar elementos

console.log(arr.indexOf(999))

// join - tranforma em string

var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(' '))/

// reverse - inverte os elementos

console.log(arr2.reverse())

// sort - oraganiza os elementos 

console.log(arr.sort())